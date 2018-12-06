import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city;
  country;
  countryz;
  zipcode;
  statusone=false;
  statustwo=false;
  mystatus=false;
  weather;
  weathers:any[]=[];
  mylocweather;
  source;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  

    window.navigator.geolocation.getCurrentPosition(pos=>{
      console.log();
      this.http.get('https://api.openweathermap.org/data/2.5/weather?lat='+pos.coords.latitude+'&lon='+pos.coords.longitude+'&appid=7a6610a645e315990e8790ac5dc3121f').subscribe(
        res=>{
          this.mylocweather=res;
          this.mystatus=!this.mystatus;
        }
      )
    })
  }
  
  showWeather(){
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+this.city+','+this.country+'&appid=7a6610a645e315990e8790ac5dc3121f').subscribe(
      (res)=>{
       this.weather=res;
       this.source="http://openweathermap.org/img/w/"+this.weather.weather[0].icon+".png";
       this.statusone=true;
       this.city="";
       this.country="";
      }
    );
  }

  showFiveWeather(){
    this.http.get<any>('https://api.openweathermap.org/data/2.5/forecast?q='+this.city+','+this.country+'&appid=7a6610a645e315990e8790ac5dc3121f').subscribe(
      (response)=>{
       this.weathers=response.list;
       this.statustwo=true;
       this.city="";
       this.country="";
      }
    );
  }

  showWeatherFiveByZip(){
    this.http.get<any>('https://api.openweathermap.org/data/2.5/forecast?zip='+this.zipcode+','+this.countryz+'&appid=7a6610a645e315990e8790ac5dc3121f').subscribe(
      (res)=>{
       this.weathers=res.list;
       this.zipcode="";
       this.countryz="";
       this.statustwo=true;
      }
    );
  }
  showWeatherByZip(){
    this.http.get('https://api.openweathermap.org/data/2.5/weather?zip='+this.zipcode+','+this.countryz+'&appid=7a6610a645e315990e8790ac5dc3121f').subscribe(
      (res)=>{
       this.weather=res;
       this.source="http://openweathermap.org/img/w/"+this.weather.weather[0].icon+".png";
       this.zipcode="";
       this.countryz="";
       this.statusone=true;
      }
    );
  }

}
