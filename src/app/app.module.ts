import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { BannerWindComponent } from './componentes/banner-wind/banner-wind.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { SobreMiWindComponent } from './componentes/sobre-mi-wind/sobre-mi-wind.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LogoNombreComponent } from './componentes/logo-nombre/logo-nombre.component';
import { SocialesLoginComponent } from './componentes/sociales-login/sociales-login.component';
import { SobreMiTextoComponent } from './componentes/sobre-mi-texto/sobre-mi-texto.component';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    BannerWindComponent,
    SobreMiComponent,
    SobreMiWindComponent,
    EstudiosComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    LogoNombreComponent,
    SocialesLoginComponent,
    SobreMiTextoComponent,
    DashboardComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
