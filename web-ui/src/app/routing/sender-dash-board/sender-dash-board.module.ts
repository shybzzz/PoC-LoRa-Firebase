import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SenderDashBoardComponent } from './sender-dash-board.component';

@NgModule({
  declarations: [SenderDashBoardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SenderDashBoardComponent }]),
  ],
})
export class SenderDashBoardModule {}
