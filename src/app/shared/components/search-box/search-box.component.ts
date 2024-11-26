import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SharedSearchBoxComponent implements OnInit, OnDestroy {
  private debounce: Subject<string> = new Subject<string>();
  private debounceSubscription?: Subscription;

  @Input()
  public placeholderName: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Input()
  public initialValue: string | undefined = '';

  ngOnInit(): void {
    this.debounceSubscription = this.debounce
      .pipe(debounceTime(500))
      .subscribe((value) => {
        this.emitValue(value);
      });
  }

  ngOnDestroy(): void {
    this.debounceSubscription?.unsubscribe();
  }

  public emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debounce.next(searchTerm);
  }
}
