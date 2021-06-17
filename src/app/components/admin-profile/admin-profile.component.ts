import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  panelOpenState = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleNav(nav:any) {
    if (nav.opened) {
      nav.close()
    } else {
      nav.open();
    }
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }


}
