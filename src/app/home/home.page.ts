import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
import { SupabaseService } from '../services/supabase';
import { ProveedorModel } from '../models/proveedor.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit{
  private supabaseService = inject(SupabaseService);
  proovedores:ProveedorModel[]=[];


  constructor() {}
  async ngOnInit(): Promise<void> {
    this.proovedores=await this.supabaseService.getProveedor();
  }
}
