import 'zone.js/dist/zone';
import 'reflect-metadata';

//引入ngModule装饰器
import { NgModule } from '@angular/core';
//引入浏览器模块
import { BrowserModule } from '@angular/platform-browser';
//引入组件AppComponent
import { AppComponent } from './app.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }