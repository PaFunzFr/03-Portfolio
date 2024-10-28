import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tool-box',
  templateUrl: './tool-box.component.html',
  styleUrl: './tool-box.component.scss'
})

export class ToolBoxComponent {

  @Input() tool_image: string ='';
  @Input() tool_name: string ='';
  @Input() tool_background: string ='toolName';
  @Input() tool_border: string ='';
  
}
