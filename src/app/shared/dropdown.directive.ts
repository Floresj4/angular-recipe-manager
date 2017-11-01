import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})
export class DropDownDirective implements OnInit {

	@HostBinding("class.open") isOpen:boolean = false;
	
	constructor() {
	}

	ngOnInit() {
	}
	
	@HostListener('click') onclick() {
		this.isOpen = !this.isOpen;
	}
}
