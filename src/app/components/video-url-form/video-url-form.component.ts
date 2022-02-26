import { Component, Input, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';
import { VideoService } from 'src/app/services/video.service';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-video-url-form',
  templateUrl: './video-url-form.component.html',
  styleUrls: ['./video-url-form.component.css'],
})
export class VideoUrlFormComponent implements OnInit {
  title: string;
  description: string;

  videoUrl: string;
  data: any[];

  constructor(
    private youtubeService: YoutubeService,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {}

  m() {
    console.log(this.videoService.getId(this.videoUrl));

    this.youtubeService
      .getData(this.videoService.getId(this.videoUrl))
      .subscribe((data) => {
        // data.items.forEach((element) => {
        //   console.log(element.snippet.title);
        //   console.log(element.snippet.description);
        // });
        console.log(data.items[0].snippet.title);
        console.log(data.items[0].snippet.description);

        this.title = data.items[0].snippet.title;
        this.description = data.items[0].snippet.description;
      });

    // this.youtubeService.getChannels('dijalog podcast').subscribe((data) => {
    //   console.log(data);
    // });
  }
}
