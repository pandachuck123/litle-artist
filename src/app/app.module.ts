import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SlickCarouselModule} from 'ngx-slick-carousel';
import {NgtUniversalModule} from '@ng-toolkit/universal';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgSelectModule} from '@ng-select/ng-select';
import {ToastrModule} from 'ngx-toastr';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SelectDropDownModule } from 'ngx-select-dropdown';

import {LoginModule} from "./login/login.module";
import {CommonModule} from "@angular/common";
import { PagesComponent } from './pages/pages.component';
import {HomeComponent} from "./navbars/home/home.component";
import {ReportUploadComponent} from "./navbars/report-upload/report-upload.component";
import {StudentReportComponent} from "./navbars/student-report/student-report.component";
import {TeacherReportComponent} from "./navbars/teacher-report/teacher-report.component";
import {ProjectReportComponent} from "./navbars/project-report/project-report.component";
import {ReportComponent} from "./navbars/report/report.component";
import {ProjectSetupComponent} from "./navbars/project-setup/project-setup.component";
import { AddUserComponent } from './navbars/add-user/add-user.component';
import { EditUserComponent } from './navbars/edit-user/edit-user.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    ReportUploadComponent,
    StudentReportComponent,
    TeacherReportComponent,
    ProjectReportComponent,
    ReportComponent,
    ProjectSetupComponent,
    AddUserComponent,
    EditUserComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    // CommonModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    FlexLayoutModule.withConfig({ssrObserveBreakpoints: ['xs', 'lt-md']}),
    NgtUniversalModule,
    ToastrModule.forRoot(),
    NgSelectModule,
    HttpClientModule,
    Ng2SearchPipeModule,


    SelectDropDownModule,
    NgxPaginationModule,

    MatSliderModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,

    LoginModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule { }
