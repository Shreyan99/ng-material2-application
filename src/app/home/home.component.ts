import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <div>
  <md-toolbar color="primary">
    <span><md-icon>mood</md-icon></span>

    <span>Yay, Material in Angular 2!</span>

    <button md-icon-button [md-menu-trigger-for]="menu">
      <md-icon>more_vert</md-icon>
    </button>
  </md-toolbar>
  <md-menu x-position="before" #menu="mdMenu">
    <button md-menu-item>Option 1</button>
    <button md-menu-item>Option 2</button>
  </md-menu>

  <md-card>
    <button md-button>All</button>
    <button md-raised-button>Of</button>
    <button md-raised-button color="primary">The</button>
    <button md-raised-button color="accent">Buttons</button>
  </md-card>

  <span class="done">
    <button md-fab>
      <md-icon>check circle</md-icon>
    </button>
  </span>
</div>
  `,
})
export class AppComponent  { name = 'Angular'; }

