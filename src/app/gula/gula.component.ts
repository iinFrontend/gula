import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-gula',
  styleUrl: './gula.component.css',
  templateUrl: './gula.component.html',
})
export class GulaComponent {
  builder = inject(FormBuilder)

  gulaForm = this.builder.group({
    height: ['', [Validators.required, Validators.min(1)]],
    side: ['',[Validators.required, Validators.min(1)]],

    volume: ['', ]

    
  })

  showValue = false


  startCalc(){
    const volume = this.calcVolume(
      Number(this.gulaForm.value.height),
      Number(this.gulaForm.value.side)
    )
    this.gulaForm.get('volume')?.setValue(String(volume))
    this.showValue = true
  }
  calcVolume(height: number, side: number):number{
    const volume = 1.0 / 3.0 * Math.pow( side, 2)  * height
    return volume
  }
}
