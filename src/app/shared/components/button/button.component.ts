import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, output } from '@angular/core';

//btn-primary
//<button type="button" class="btn btn-secondary">Secondary</button>
//<button type="button" class="btn btn-success">Success</button>
//<button type="button" class="btn btn-danger">Danger</button>
//<button type="button" class="btn btn-warning">Warning</button>
//<button type="button" class="btn btn-info">Info</button>
//<button type="button" class="btn btn-light">Light</button>
//<button type="button" class="btn btn-dark">Dark</button>

//<button type="button" class="btn btn-link">Link</button>


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {

 @Input() variant: ButtonVariant='primary';
 @Output() click = new EventEmitter<MouseEvent>();

 onClick(event: MouseEvent) {
  this.click.emit(event);
  } 

  get buttonClass(): string{
    return `btn btn-${this.variant}`;
  }
}

export type ButtonVariant=
| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark'
| 'link';