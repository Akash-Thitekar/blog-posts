import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsServicesService } from '../_services/posts-services.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  sub: any;
  id: any;
  post: any;
  comments: any;
  faSpinner = faSpinner;
  commentSpinner = true;
  postSpinner = true;
  
  constructor(private route: ActivatedRoute, private postService: PostsServicesService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      });
      console.log(this.id);

      if(this.id){
        this.postService.getPostDetail(this.id).subscribe( (res) => {
          this.post = res.data;
          this.postSpinner = false;
        }, (err) => {
          alert("Error loading post"+ err);
          this.postSpinner = false;
        });

        this.postService.getPostComment(this.id).subscribe( (res) => {
          this.comments = res.data;
          this.commentSpinner = false;
        }, (err) => {
          alert("Error loading comments"+err);
          this.commentSpinner = false;
        })
      }


  }

}
