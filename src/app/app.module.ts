import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { BannerWindComponent } from './componentes/banner-wind/banner-wind.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { SobreMiWindComponent } from './componentes/sobre-mi-wind/sobre-mi-wind.component';
import { VideoBackComponent } from './componentes/video-back/video-back.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    BannerWindComponent,
    SobreMiComponent,
    SobreMiWindComponent,
    VideoBackComponent,
    EstudiosComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
