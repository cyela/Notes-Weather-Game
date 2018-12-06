import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'sort'
}
)
export class SortPipe implements PipeTransform{


    transform(values:any[], args:string):any{
        console.log("came");
        if(args==='asc'){
            return values.sort();
        }else if(args==='desc'){
            return values.sort().reverse();
        }

    }
}
