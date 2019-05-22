import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './views';
import { routing } from './app.routing';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { SearchResultsComponent } from './component/search-results/search-results.component';
import { SongsService } from './services';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SearchBarComponent,
        SearchResultsComponent
    ],
    providers: [
        SongsService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
