import { CompetitionRankingListComponent } from './../pages/competition/competition-ranking-list/competition-ranking-list.component';
import { CompetitionGamesPage } from './../pages/competition/competition-games/competition-games.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from '../pages/admin/admin-home/admin-home.component';
import { AssessRefereePage } from '../pages/assessment/assess-referee/assess-referee';
import { AssessmentEditPage } from '../pages/assessment/assessment-edit/assessment-edit';
import { AssessmentListPage } from '../pages/assessment/assessment-list/assessment-list';
import { CoachingEditPage } from '../pages/coaching/coaching-edit/coaching-edit';
import { CoachingGamePage } from '../pages/coaching/coaching-game/coaching-game';
import { CoachingImprovmentFeedbackEditPage } from '../pages/coaching/coaching-improvment-feedback-edit/coaching-improvment-feedback-edit';
import { CoachingListPage } from '../pages/coaching/coaching-list/coaching-list';
import { CoachingPositiveFeedbackEditPage } from '../pages/coaching/coaching-positive-feedback-edit/coaching-positive-feedback-edit';
import { CoachingActivityPage } from './../pages/admin/coaching-activity/coaching-activity.page';
import { CompetitionImportComponent } from '../pages/competition/competition-import/competition-import.component';
import { CompetitionListPage } from '../pages/competition/competition-list/competition-list';
import { CompetitionEditComponent } from '../pages/competition/competition-edit/competition-edit.component';
import { CompetitionCoachesPage } from './../pages/competition/competition-coaches/competition-coaches.page';
import { CompetitionRefereesPage } from './../pages/competition/competition-referees/competition-referees.page';
import { CompetitionUpgradesPage } from './../pages/competition/competition-upgrades/competition-upgrades.page';
import { CompetitionRankingPage } from './../pages/competition/competition-ranking/competition-ranking.page';
import { CompetitionHomePage } from './../pages/competition/competition-home/competition-home.page';
import { HomePage } from '../pages/home/home';
import { ProEditPage } from '../pages/pro/pro-edit/pro-edit';
import { ProListPage } from '../pages/pro/pro-list/pro-list';
import { RefereeImportComponent } from '../pages/referee/referee-import/referee-import.component';
import { RefereeSeasonUpgradeComponent } from '../pages/referee/referee-season-upgrade/referee-season-upgrade.component';
import { RefereeListPage } from '../pages/referee/referee-list/referee-list';
import { RefereeViewPage } from '../pages/referee/referee-view/referee-view';
import { SettingsPage } from '../pages/settings/settings';
import { SkillEditPage } from 'src/pages/skill-profile/skill-edit/skill-edit';
import { SkillProfileEditPage } from '../pages/skill-profile/skill-profile-edit/skill-profile-edit';
import { SkillProfileListPage } from '../pages/skill-profile/skill-profile-list/skill-profile-list';
import { SkillSetEditPage } from '../pages/skill-profile/skill-set-edit/skill-set-edit';
import { UserEditPage } from '../pages/user/user-edit/user-edit';
import { XpEditComponent } from '../pages/xp/xp-edit/xp-edit.component';
import { XpListComponent } from '../pages/xp/xp-list/xp-list.component';
import { UserLoginComponent } from 'src/pages/user/user-login/user-login.component';
import { UserManagerComponent } from './../pages/admin/user-manager/user-manager.component';
import { UserWaitingValidationPage } from '../pages/user/user-waiting-validation/user-waiting-validation'

import { AuthGuard } from './AuthGuard';
import { AdminGuard } from './AdminGuard';

const routes: Routes = [
  { path: 'admin', component: AdminHomeComponent, canActivate: [AdminGuard] },
  { path: 'admin/user-manager', component: UserManagerComponent, canActivate: [AdminGuard] },
  { path: 'admin/coaching-activity', component: CoachingActivityPage, canActivate: [AdminGuard] },

  { path: 'assessment/list', component: AssessmentListPage, canActivate: [AuthGuard] },
  { path: 'assessment/create', component: AssessmentEditPage, canActivate: [AuthGuard] },
  { path: 'assessment/edit/:id', component: AssessmentEditPage, canActivate: [AuthGuard] },
  { path: 'assessment/assess/:id', component: AssessRefereePage, canActivate: [AuthGuard] },

  { path: 'coaching/list', component: CoachingListPage, canActivate: [AuthGuard] },
  { path: 'coaching/create', component: CoachingEditPage, canActivate: [AuthGuard] },
  { path: 'coaching/edit/:id', component: CoachingEditPage, canActivate: [AuthGuard] },
  { path: 'coaching/coach/:id', component: CoachingGamePage, canActivate: [AuthGuard] },
  { path: 'coaching/coach/:id/referee/:refereeIdx/negativeFeedback/:feedbackIdx',
        component: CoachingImprovmentFeedbackEditPage, canActivate: [AuthGuard] },
  { path: 'coaching/coach/:id/referee/:refereeIdx/positiveFeedback/:feedbackIdx',
        component: CoachingPositiveFeedbackEditPage, canActivate: [AuthGuard] },

  { path: 'competition/list', component: CompetitionListPage, canActivate: [AuthGuard] },
  { path: 'competition/import', component: CompetitionImportComponent, canActivate: [AuthGuard] },
  { path: 'competition/:id/home', component: CompetitionHomePage, canActivate: [AuthGuard] },
  { path: 'competition/:id/edit', component: CompetitionEditComponent, canActivate: [AuthGuard] },
  { path: 'competition/:id/coaches', component: CompetitionCoachesPage, canActivate: [AuthGuard] },
  { path: 'competition/:id/games', component: CompetitionGamesPage, canActivate: [AuthGuard] },
  { path: 'competition/:id/ranking', component: CompetitionRankingListComponent, canActivate: [AuthGuard] },
  { path: 'competition/:id/ranking/:listId', component: CompetitionRankingPage, canActivate: [AuthGuard] },
  { path: 'competition/:id/referees', component: CompetitionRefereesPage, canActivate: [AuthGuard] },
  { path: 'competition/:id/upgrades', component: CompetitionUpgradesPage, canActivate: [AuthGuard] },

  { path: 'home', component: HomePage, canActivate: [AuthGuard]},

  { path: 'pro/edit/:id', component: ProEditPage, canActivate: [AuthGuard] },
  { path: 'pro/list', component: ProListPage, canActivate: [AuthGuard] },

  { path: 'referee/list', component: RefereeListPage, canActivate: [AuthGuard] },
  { path: 'referee/view/:id', component: RefereeViewPage, canActivate: [AuthGuard] },
  { path: 'referee/import', component: RefereeImportComponent, canActivate: [AuthGuard] },
  { path: 'referee/upgrades', component: RefereeSeasonUpgradeComponent, canActivate: [AuthGuard] },
  // MODAL { path: 'referee/select', component: RefereeSelectPage, canActivate: [AuthGuard] },
  // MODAL { path: 'referee/edit/:id', component: RefereeEditPage, canActivate: [AuthGuard] },

  { path: 'settings', component: SettingsPage, canActivate: [AuthGuard]},

  { path: 'skillprofile/list', component: SkillProfileListPage, canActivate: [AuthGuard] },
  { path: 'skillprofile/create', component: SkillProfileEditPage, canActivate: [AuthGuard] },
  { path: 'skillprofile/:skillProfileid', component: SkillProfileEditPage, canActivate: [AuthGuard] },
  { path: 'skillprofile/:skillProfileid/skillset/:skillSetIdx', component: SkillSetEditPage, canActivate: [AuthGuard] },
  { path: 'skillprofile/:skillProfileid/skillset/:skillSetIdx/skill/:skillIdx', component: SkillEditPage, canActivate: [AuthGuard] },

  { path: 'user/login', component: UserLoginComponent},
  { path: 'user/create', component: UserEditPage},
  { path: 'user/waiting-validation', component: UserWaitingValidationPage},
  { path: 'user/edit/:id', component: UserEditPage, canActivate: [AuthGuard] },

  { path: 'xp/list', component: XpListComponent, canActivate: [AuthGuard]},
  { path: 'xp/edit/:id', component: XpEditComponent, canActivate: [AuthGuard]},
  { path: 'xp/create', component: XpEditComponent, canActivate: [AuthGuard]},

  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { preloadingStrategy: PreloadAllModules,
        enableTracing: false,
        onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
