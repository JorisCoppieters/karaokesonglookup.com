import { Component, OnInit } from '@angular/core';
import { SongsService } from 'src/app/services';

import { Song } from '../../models';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  public songs: Song[];

  constructor(private songsService: SongsService) { }

  ngOnInit() {
      this.songsService.onFiltered((songs: Song[]) => {
          this.songs = songs;
      });
  }
}
