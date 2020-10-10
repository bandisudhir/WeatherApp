import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {

    transform(value: number, unit: string) {

        if (value && !isNaN(value)) {
            var tempareature = 0;
            if (unit === 'C') {
                tempareature = value - 273.15;
                return tempareature.toFixed(2);
            }
            if (unit === 'F') {
                tempareature = (value - 273.15) * 9 / 5 + 32;
                return tempareature.toFixed(2);
            }
        }
        return;
    }

}