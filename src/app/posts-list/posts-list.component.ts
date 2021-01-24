import { Component, OnInit } from '@angular/core';
import { PostsServicesService } from '../_services/posts-services.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  postsData: any;
  page = 1;
  pageSize = 20;
  faSpinner = faSpinner;
  spinnerFlag = false;
  faAngular = faAngular;
  postsMetadata: any;

  constructor(private postService: PostsServicesService) {}

  ngOnInit(): void {
    this.spinnerFlag = true;
    this.fetchPosts(this.page);
  }

  fetchPosts(pageNo) {
    this.spinnerFlag = true;
    this.postService.getPosts(pageNo).subscribe(
      (res) => {
        console.log(res);
        this.postsData = res.data;
        this.postsMetadata = res.meta.pagination.total;
        this.spinnerFlag = false;
      },
      (err) => {
        console.log(err);
        alert('Error loading posts' + err);
        this.spinnerFlag = false;
      }
    );
  }
}
