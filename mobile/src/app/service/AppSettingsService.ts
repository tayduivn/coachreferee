import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalAppSettings, NetworkConnection } from './../model/settings';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { LocalSingletonDataService } from './LocalSingletonDataService';

@Injectable()
export class AppSettingsService extends LocalSingletonDataService<LocalAppSettings> {

    constructor(storage: Storage) {
        super(storage, 'LocalAppSettings');
    }

    public get(): Observable<LocalAppSettings> {
        return super.get().pipe(
            map((las: LocalAppSettings) => {
                let result: LocalAppSettings = las;
                if (!result) {
                    result = {
                        apiKey: 'AIzaSyCkimKVeEHQi3PilLUkJ8jl6XzTaZr_5FE',
                        serverUrl: 'https://refcoach-676e3.firebaseio.com',
                        minNetworkConnectionForSyncho: 'NONE',
                        lastUserEmail: null,
                        lastUserPassword: null,
                        forceOffline: false
                    };
                    super.save(result);
                }
                return result;
            })
        );
    }

    public setLastUser(email: string, password: string) {
        this.get().subscribe((setting: LocalAppSettings) => {
            setting.lastUserEmail = email;
            setting.lastUserPassword = password;
            this.save(setting).subscribe();
        });
    }
    public setMinNetworkConnectionForSyncho(minNetworkConnectionForSyncho: NetworkConnection) {
        this.get().subscribe((setting: LocalAppSettings) => {
            setting.minNetworkConnectionForSyncho = minNetworkConnectionForSyncho;
            this.save(setting).subscribe();
        });
    }
    public setServerUrl(serverUrl: string) {
        this.get().subscribe((setting: LocalAppSettings) => {
            setting.serverUrl = serverUrl;
            this.save(setting).subscribe();
        });
    }
    public setApplicationVersion(applicationVersion: string) {
        this.get().subscribe((setting: LocalAppSettings) => {
            setting.applicationVersion = applicationVersion;
            this.save(setting).subscribe();
        });
    }
}
