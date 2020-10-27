import { Component, OnInit, Input  } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles: []
})
export class ArticleComponent implements OnInit {

  @Input() my_modal_title;
  @Input() my_modal_longcontent;
  @Input() my_modal_shortcontent;
  @Input() my_modal_image;
  @Input() my_modal_date;
  
  constructor(public activeModal: NgbActiveModal) {  }

  ngOnInit(): void {  
  }
  

}
