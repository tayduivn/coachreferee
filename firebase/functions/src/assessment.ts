import { GameCategory, GameLevel } from './game';
import { PersistentData, SharedElement } from './common';
export type Competency = 'YES' | 'NE' | 'NO';

export interface Evaluation {
    competency: Competency;
    comment: string;
}
export interface SkillEvaluation extends Evaluation {
    skillName: string;
}
export interface SkillSetEvaluation extends Evaluation {
    skillSetName: string;
    skillEvaluations: SkillEvaluation[];
}
export interface SkillProfileEvaluation extends Evaluation {
    profileId: string;
    profileName: string;
    skillSetEvaluation: SkillSetEvaluation[];
}
export interface Assessment extends SkillProfileEvaluation, PersistentData, SharedElement {
    competition: string;
    date: Date;
    field: string;
    timeSlot: string;
    coachId: string;
    gameCategory: GameCategory;
    gameSpeed: GameLevel;
    gameSkill: GameLevel;
    refereeId: string;
    refereeShortName: string;
    closed: boolean;
}
