import { AngularFirestore } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AlertController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
// import { File, FileEntry } from '@ionic-native/file';
// import { SocialSharing } from '@ionic-native/social-sharing';
// import { FilePath } from '@ionic-native/file-path';
// import { Toast } from '@ionic-native/toast';
// import { FileChooser } from '@ionic-native/file-chooser';
import { Observable, of, concat, forkJoin } from 'rxjs';
import { UserService } from '../../app/service/UserService';
import { SkillProfileService } from '../../app/service/SkillProfileService';
import { PROService } from '../../app/service/PROService';
import { CoachingService } from '../../app/service/CoachingService';
import { RefereeService } from '../../app/service/RefereeService';
import { AppSettingsService } from '../../app/service/AppSettingsService';
import { LocalAppSettings } from '../../app/model/settings';
import { AssessmentService } from '../../app/service/AssessmentService';
import { ConnectedUserService } from '../../app/service/ConnectedUserService';
import { EmailService } from '../../app/service/EmailService';
import { Coaching, PersistentPRO } from './../../app/model/coaching';
import { Assessment } from './../../app/model/assessment';
import { SkillProfile } from './../../app/model/skill';
import { User, Referee } from './../../app/model/user';
import { ExportedData } from './../../app/model/settings';

import { LEVELS_AUS } from './levelAus';
import { LEVELS_NZ } from './levelNZ';
import { LEVELS_EURO } from './levelEuropean';
import { environment } from '../../environments/environment';


/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage implements OnInit {

  settings: LocalAppSettings;
  msg: string[] = [];
  env = environment;

  constructor(
    private router: Router,
    public appSettingsService: AppSettingsService,
    public connectedUserService: ConnectedUserService,
    public userService: UserService,
    public refereeService: RefereeService,
    public proService: PROService,
    public skillProfileService: SkillProfileService,
    public coachingService: CoachingService,
    public assessmentService: AssessmentService,
    public alertController: AlertController,
    public emailService: EmailService,
    private firestore: AngularFirestore,
    public toastController: ToastController
    // public file: File,
    // private filePath: FilePath,
    // private socialSharing: SocialSharing,
    // private toast: Toast,
    // private fileChooser: FileChooser
  ) {
  }

  ngOnInit() {
    console.log('ionViewDidLoad SettingsPage');
    this.appSettingsService.get().subscribe((appSettings: LocalAppSettings) => {
      this.settings = appSettings;
    });
  }

  public onToggleForceOffline() {
    if (this.settings.forceOffline) {
      this.firestore.firestore.disableNetwork();
    } else {
      this.firestore.firestore.enableNetwork();
    }
  }

  public saveSettings() {
    this.appSettingsService.save(this.settings).pipe(
      map((settings: LocalAppSettings) => {
        this.settings = settings;
        this.router.navigate(['/home']);
      })
    ).subscribe();
  }

  public importData() {
    /*
    this.fileChooser.open().then(uri => {
      console.log(uri);
      return this.filePath.resolveNativePath(uri);
    }).then( (filePath) => {
      console.log('Filepath=', filePath);
      const index = filePath.lastIndexOf('/');
      const path: string = filePath.substr(0, index);
      const fileName: string = filePath.substr(index + 1);
      return this.file.readAsText(path, fileName);
    }).then((content) => {
      this.importDataObjects(JSON.parse(content));
    }).catch(e => {
      console.log(e);
      this.toast.showLongBottom('Fail to read file: ' + e);
    });
    */
  }

  private importDataObjects(importObj: ExportedData) {
    let obs: Observable<any> = of('');
    if (importObj.users) {
      importObj.users.forEach((elem: User) => {
        // re create Date object avec serialisation
        elem.creationDate = new Date(elem.creationDate);
        elem.lastUpdate = new Date(elem.lastUpdate);
        obs = concat(obs, this.userService.save(elem));
      });
    }
    if (importObj.referees) {
      importObj.referees.forEach((elem: Referee) => {
        elem.creationDate = new Date(elem.creationDate);
        elem.lastUpdate = new Date(elem.lastUpdate);
        obs = concat(obs, this.refereeService.save(elem));
      });
    }
    if (importObj.skillProfiles) {
      importObj.skillProfiles.forEach((elem: SkillProfile) => {
        elem.creationDate = new Date(elem.creationDate);
        elem.lastUpdate = new Date(elem.lastUpdate);
        obs = concat(obs, this.skillProfileService.save(elem));
      });
    }
    if (importObj.pros) {
      importObj.pros.forEach((elem: PersistentPRO) => {
        elem.creationDate = new Date(elem.creationDate);
        elem.lastUpdate = new Date(elem.lastUpdate);
        obs = concat(obs, this.proService.save(elem));
      });
    }
    if (importObj.coachings) {
      importObj.coachings.forEach((elem: Coaching) => {
        elem.date = new Date(elem.date);
        elem.creationDate = new Date(elem.creationDate);
        elem.lastUpdate = new Date(elem.lastUpdate);
        obs = concat(obs, this.coachingService.save(elem));
      });
    }
    if (importObj.assessments) {
      importObj.assessments.forEach((elem: Assessment) => {
        elem.date = new Date(elem.date);
        elem.creationDate = new Date(elem.creationDate);
        elem.lastUpdate = new Date(elem.lastUpdate);
        obs = concat(obs, this.assessmentService.save(elem));
      });
    }
    obs.subscribe(() => {
      this.msg.push('Data imported.');
      // this.toast.showShortCenter('Data imported.').subscribe();
      console.log('Data imported.');
    });
  }

  private toast(msg: string) {
    this.toastController.create({
      message: msg,
      position: 'bottom',
      duration: 2000,
      translucent: true
    }).then((alert) => alert.present());
  }

  importLevelsAus() {
    let obs: Observable<any> = of('');
    LEVELS_AUS.forEach((elem) => {
      const e = elem;
      obs = concat(obs, this.skillProfileService.save(e).pipe(map(() => { console.log(e.id + ' imported.'); })));
    });
    obs.subscribe(() => {
      this.toast('Aus levels imported.');
    });
  }

  importLevelsEuro() {
    let obs: Observable<any> = of('');
    LEVELS_EURO.forEach((elem) => {
      const e = elem;
      obs = concat(obs, this.skillProfileService.save(e).pipe(map(() => { console.log(e.id + ' imported.'); })));
    });
    obs.subscribe(() => {
      this.toast('Euro levels imported.');
    });
  }

  importLevelsNZ() {
    let obs: Observable<any> = of('');
    LEVELS_NZ.forEach((elem) => {
      const e = elem;
      obs = concat(obs, this.skillProfileService.save(e).pipe(map(() => { console.log(e.id + ' imported.'); })));
    });
    obs.subscribe(() => {
      this.toast('NZ levels imported.');
    });
  }

  public exportData() {
      this.alertController.create({
        header: 'Which data do you want to export?',
        inputs: [
          {type: 'checkbox', label: 'Users',           value: 'users',           checked: true},
          {type: 'checkbox', label: 'Referees',        value: 'referees',        checked: true},
          {type: 'checkbox', label: 'Levels',          value: 'skillProfiles',   checked: true},
          {type: 'checkbox', label: 'PROs'     ,       value: 'pros',            checked: true},
          {type: 'checkbox', label: 'Coachings',       value: 'coachings',       checked: true},
          {type: 'checkbox', label: 'Assessments',     value: 'assessments',     checked: true}],
        buttons: ['Cancel',
          {
            text: 'Export',
            handler: (data: string[]) => {
                const exportObj: ExportedData = {};
                const observables = [];
                if (data.indexOf('users') >= 0) {
                  observables.push(this.userService.all().pipe(map(          (response) => exportObj.users         =  response.data)));
                }
                if (data.indexOf('referees') >= 0) {
                  observables.push(this.refereeService.all().pipe(map(       (response) => exportObj.referees      =  response.data)));
                }
                if (data.indexOf('skillProfiles') >= 0) {
                  observables.push(this.skillProfileService.all().pipe(map(  (response) => exportObj.skillProfiles =  response.data)));
                }
                if (data.indexOf('pros') >= 0) {
                  observables.push(this.proService.all().pipe(map(           (response) => exportObj.pros          =  response.data)));
                }
                if (data.indexOf('coachings') >= 0) {
                  observables.push(this.coachingService.all().pipe(map(      (response) => exportObj.coachings     =  response.data)));
                }
                if (data.indexOf('assessments') >= 0) {
                  observables.push(this.assessmentService.all().pipe(map(    (response) => exportObj.assessments   =  response.data)));
                }
                /*
                forkJoin(observables).subscribe( () => {
                  const str = JSON.stringify(exportObj, null, 2);
                  // console.log('Exported data: ', str);
                  const fileName = `referee_coach_${new Date().getTime()}.json`;
                  const path = this.file.dataDirectory;
                  // console.log('Writing file: ' + path + fileName);
                  this.file.writeFile(path, fileName, str, {replace: true})
                    .then((fe: FileEntry) => {
                      // console.log('Write OK', fe);
                      this.socialSharing.share(null, null, fe.nativeURL, null).then(() => this.msg.push('Data exported'));
                    }).catch((error) => {
                      console.error('Writing error: ', error);
                      this.toast.showLongBottom('Fail to write file: ' + error).subscribe();
                    });
                });
                */
              }
          }]
      }).then( (alert) => alert.present());
  }
}
