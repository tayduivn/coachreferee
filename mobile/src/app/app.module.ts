import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppSettingsService } from './service/AppSettingsService';
import { AssessmentService } from './service/AssessmentService';
import { BookmarkService } from './service/BookmarkService';
import { CoachingService } from './service/CoachingService';
import { ConnectedUserService } from './service/ConnectedUserService';
import { EmailService } from './service/EmailService';
import { LocalDatabaseService } from './service/LocalDatabaseService';
import { PROService } from './service/PROService';
import { RefereeService } from './service/RefereeService';
import { SkillProfileService } from './service/SkillProfileService';
import { ToolService } from './service/ToolService';
import { UserService } from './service/UserService';
import { VersionService } from './service/VersionService';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AssessRefereePage } from './../pages/assess-referee/assess-referee';
import { CompetencyComponent } from './../pages/assess-referee/competency-component';
import { AssessmentEditPage } from './../pages/assessment-edit/assessment-edit';
import { AssessmentListPage } from './../pages/assessment-list/assessment-list';
import { CoachingEditPage } from './../pages/coaching-edit/coaching-edit';
import { CoachingGamePage } from './../pages/coaching-game/coaching-game';
import { CoachingImprovmentFeedbackEditPage } from './../pages/coaching-improvment-feedback-edit/coaching-improvment-feedback-edit';
import { CoachingListPage } from './../pages/coaching-list/coaching-list';
import { CoachingPositiveFeedbackEditPage } from './../pages/coaching-positive-feedback-edit/coaching-positive-feedback-edit';
import { CompetitionListPage } from './../pages/competition-list/competition-list';
import { HomePage } from '../pages/home/home';
import { PeriodSelectorComponent } from './../pages/period-selector-component';
import { ProEditPage } from './../pages/pro-edit/pro-edit';
import { ProListPage } from './../pages/pro-list/pro-list';
import { RefereeEditPage } from 'src/pages/referee-edit/referee-edit';
import { RefereeListPage } from './../pages/referee-list/referee-list';
import { RefereeSelectPage } from './../pages/referee-select/referee-select';
import { RefereeViewPage } from './../pages/referee-view/referee-view';
import { SettingsPage } from '../pages/settings/settings';
import { SkillEditPage } from 'src/pages/skill-edit/skill-edit';
import { SkillProfileEditPage } from './../pages/skill-profile-edit/skill-profile-edit';
import { SkillProfileListPage } from './../pages/skill-profile-list/skill-profile-list';
import { SkillSetEditPage } from './../pages/skill-set-edit/skill-set-edit';
import { UserEditPage } from '../pages/user-edit/user-edit';
import { UserSelectionPage } from '../pages/user-selection/user-selection';
import { SharingComponent } from './../pages/sharing-component';
import { UserLogoutComponent } from '../pages/user-logout/user-logout.component';
import { CameraIconComponent } from './../pages/camera-icon-component';

@NgModule({
  declarations: [AppComponent,
    AssessRefereePage, AssessmentEditPage, AssessmentListPage,
    CoachingEditPage, CoachingGamePage, CoachingImprovmentFeedbackEditPage, CoachingListPage, CoachingPositiveFeedbackEditPage,
    CompetitionListPage,
    HomePage,
    ProEditPage, ProListPage,
    RefereeListPage, RefereeViewPage, RefereeSelectPage, RefereeEditPage,
    SettingsPage,
    SkillEditPage, SkillProfileEditPage, SkillProfileListPage, SkillSetEditPage,
    UserEditPage, UserSelectionPage, UserLogoutComponent,
    SharingComponent, CompetencyComponent, PeriodSelectorComponent, CameraIconComponent],
  entryComponents: [AppComponent, HomePage, RefereeSelectPage, RefereeEditPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    HttpClientModule,
    IonicStorageModule.forRoot({ name: '__myDb', driverOrder : [ 'indexeddb', 'websql', 'sqlite']}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule],
  providers: [
    AppSettingsService,
    AssessmentService,
    BookmarkService,
    CoachingService,
    ConnectedUserService,
    EmailService,
    LocalDatabaseService,
    PROService,
    RefereeService,
    SkillProfileService,
    SplashScreen,
    StatusBar,
    SplashScreen,
    ToolService,
    UserService,
    VersionService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}