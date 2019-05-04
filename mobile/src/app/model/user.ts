import { CoachDataSharingAgreement, RefereeDataSharingAgreement } from './privacy';
import { PersistentData } from './common';
import { GameCategory } from './game';

export type RefereeCoachLevel = 'NONE' | 'EURO_0' | 'EURO_1' | 'EURO_2' | 'EURO_3' |'EURO_4' |'EURO_5'
                                | 'NZ_0' | 'NZ_1' | 'NZ_2' | 'NZ_3' |'NZ_4'
                                | 'AUS_0' |'AUS_1' | 'AUS_2' | 'AUS_3';
export const REFEREE_COACH_LEVELS = [ 'NONE', 'EURO_0', 'EURO_1', 'EURO_2', 'EURO_3', 'EURO_4', 'EURO_5',
                                'NZ_0', 'NZ_1', 'NZ_2', 'NZ_3', 'NZ_4',
                                'AUS_0', 'AUS_1', 'AUS_2', 'AUS_3' ];
export type RefereeLevel =  '' | 'EURO_0' |'EURO_1' | 'EURO_2' | 'EURO_3' |'EURO_4' |'EURO_5'
                                | 'NZ_0' | 'NZ_1' | 'NZ_2' | 'NZ_3' |'NZ_4'
                                | 'AUS_0' |'AUS_1' | 'AUS_2' | 'AUS_3' | 'AUS_4' | 'AUS_5' | 'AUS_6';
export const REFEREE_LEVELS =  ['' , 'EURO_0', 'EURO_1' , 'EURO_2' , 'EURO_3', 'EURO_4', 'EURO_5',
                                'NZ_0', 'NZ_1', 'NZ_2', 'NZ_3', 'NZ_4',
                                'AUS_0', 'AUS_1', 'AUS_2', 'AUS_3', 'AUS_4', 'AUS_5', 'AUS_6'];

export type Gender = 'M' | 'F';
export type RefereeCategory = 'OPEN' | 'SENIOR';
export interface Photo {
     path: string;
     url: string;
 }

 /** List of countries [0] is the internal name, [1] is the viewed name. */
export const COUNTRIES: string[][] = [
    ['Australia	', 'Australia'],
    ['Austria',	'Austria'],
    ['Belgium', 'Belgium'],
    ['Canada', 'Canada'],
    ['Chile', 'Chile'],
    ['China', 'China'],
    ['Chinese Taipei', 'Chinese Taipei'],
    ['Cook Islands', 'Cook Islands'],
    ['Czech Republic' ,	'Czech Republic'],
    ['England', 'England'],
    ['Fiji', 'Fiji'],
    ['France' , 'France'],
    ['Germany', 'Germany'],
    ['Guernesey', 'Guernesey'],
    ['HongKong', 'HongKong'],
    ['Hungary', 'Hungary'],
    ['India', 'India'],
    ['Ireland', 'Ireland'],
    ['Italy', 'Italy'],
    ['Japan', 'Japan'],
    ['Jersey', 'Jersey'],
    ['Luxembourg', 'Luxembourg'],
    ['Malaysia', 'Malaysia'],
    ['Mauritius', 'Mauritius'],
    ['Netherlands', 'Netherlands'],
    ['New Zealand', 'New Zealand'],
    ['Pakistan', 'Pakistan'],
    ['Papua New Guinea', 'Papua New Guinea'],
    ['Philippines', 'Philippines'],
    ['Portugal', 'Portugal'],
    ['Qatar', 'Qatar'],
    ['Samoa', 'Samoa'],
    ['Scotland', 'Scotland'],
    ['Singapore', 'Singapore'],
    ['South Africa', 'South Africa'],
    ['Spain', 'Spain'],
    ['Sweden', 'Sweden'],
    ['Switzerland', 'Switzerland'],
    ['United Arab Emirates', 'United Arab Emirates'],
    ['USA',	'USA'],
    ['Wales', 'Wales'],
    ['Other', 'Other']
];
export const LANGUAGES: string[][] = [
    ['EN', 'English'],
    ['FR', 'French'],
    ['DE', 'Deutsch'],
    ['ES', 'Spanish'],
    ['IT', 'Italian'],
    ['PO', 'Portuguese'],
    ['CN', 'Chinese']
];

export const CONSTANTES = {
    countries: COUNTRIES,
    languages: LANGUAGES,
    refereeCoachLevels: REFEREE_COACH_LEVELS,
    refereeLevels: REFEREE_LEVELS
};

export interface Person extends PersistentData {
    firstName: string;
    lastName: string;
    shortName: string;
    country: string;
    email: string;
    gender: Gender;
    mobilePhones: string[];
    photo: Photo;
    speakingLanguages: string[];
}

export interface Referee extends Person {
    referee ?: {
        refereeLevel: RefereeLevel;
        refereeCategory: RefereeCategory;
        nextRefereeLevel: RefereeLevel;
    };
    refereeCoach ?: {
        refereeCoachLevel: RefereeCoachLevel;
    };
    dataSharingAgreement?: RefereeDataSharingAgreement;
}

export type AppRole = 'USER' | 'PROFILE_ADMIN' | 'ADMIN';
export interface User extends Referee {
    password?: string;
    accountId: string;
    token?: string;
    defaultCompetition: string;
    defaultGameCatory: GameCategory;
    dataSharingAgreement?: CoachDataSharingAgreement;
    role: AppRole;
}

export interface UserGroup extends PersistentData {
    name: string;
    admins: string[];
    members: string[];
}

export function getNextRefereeLevel(level: RefereeLevel): RefereeLevel {
    switch (level) {
        case 'AUS_0': return 'AUS_1';
        case 'AUS_1': return 'AUS_2';
        case 'AUS_2': return 'AUS_3';
        case 'AUS_3': return 'AUS_4';
        case 'AUS_4': return 'AUS_5';
        case 'AUS_5': return 'AUS_6';
        case 'AUS_6': return 'AUS_6';
        case 'NZ_0': return 'NZ_1';
        case 'NZ_1': return 'NZ_2';
        case 'NZ_2': return 'NZ_3';
        case 'NZ_3': return 'NZ_4';
        case 'NZ_4': return 'NZ_4';
        case 'EURO_0': return 'EURO_1';
        case 'EURO_1': return 'EURO_2';
        case 'EURO_2': return 'EURO_3';
        case 'EURO_3': return 'EURO_4';
        case 'EURO_4': return 'EURO_5';
        case 'EURO_4': return 'EURO_5';
        default: return '';
    }
}