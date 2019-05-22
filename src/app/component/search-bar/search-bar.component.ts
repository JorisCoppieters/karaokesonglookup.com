import { Component } from '@angular/core';
import { SongsService } from 'src/app/services';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
constructor(private songsService: SongsService) { }
    public get filter(): string {
        return this.songsService.filter;
    }

    public set filter(value: string) {
        this.songsService.filter = value;
    }
}
