import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import {  of } from 'rxjs';
import { User } from './interfaces/user.interface';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {

  let component: AppComponent;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
        imports: [HttpClientTestingModule],
        providers: [
            AppComponent,
            UserService
        ]
    }).compileComponents();

    component = TestBed.get(AppComponent);
    userService = TestBed.get(UserService);
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it( 'El valor de myVar debe ser Hola Mundo', () => {
    const valor = component.myVar;
    expect(valor).toEqual('Hola Mundo');
  } );

  it( 'La variable debe contener Max', function() {
    const valor = component.saludo;
    expect(valor).toContain('Max');
  } );

  it( 'Debe retornar TRUE', function() {
    const respuesta = component.isEven(8);
    expect(respuesta).toBeTruthy();
  } );

  it( 'Debe retornar FALSE', function() {
    const respuesta = component.isEven(9);
    expect(respuesta).toBeFalsy();
  } );

    it( 'Debe llamar al servicio UserService y el método gelAll() para obtener todos los usuarios', () => {

        const mockUser: User[] = [
            {
                login: 'mojombo',
                id: 1,
                node_id: 'MDQ6VXNlcjE=',
                avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/mojombo',
                html_url: 'https://github.com/mojombo',
                followers_url: 'https://api.github.com/users/mojombo/followers',
                following_url: 'https://api.github.com/users/mojombo/following{/other_user}',
                gists_url: 'https://api.github.com/users/mojombo/gists{/gist_id}',
                starred_url: 'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
                subscriptions_url: 'https://api.github.com/users/mojombo/subscriptions',
                organizations_url: 'https://api.github.com/users/mojombo/orgs',
                repos_url: 'https://api.github.com/users/mojombo/repos',
                events_url: 'https://api.github.com/users/mojombo/events{/privacy}',
                received_events_url: 'https://api.github.com/users/mojombo/received_events',
                type: 'User',
                site_admin: false
            },
            {
                login: 'defunkt',
                id: 2,
                node_id: 'MDQ6VXNlcjI=',
                avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/defunkt',
                html_url: 'https://github.com/defunkt',
                followers_url: 'https://api.github.com/users/defunkt/followers',
                following_url: 'https://api.github.com/users/defunkt/following{/other_user}',
                gists_url: 'https://api.github.com/users/defunkt/gists{/gist_id}',
                starred_url: 'https://api.github.com/users/defunkt/starred{/owner}{/repo}',
                subscriptions_url: 'https://api.github.com/users/defunkt/subscriptions',
                organizations_url: 'https://api.github.com/users/defunkt/orgs',
                repos_url: 'https://api.github.com/users/defunkt/repos',
                events_url: 'https://api.github.com/users/defunkt/events{/privacy}',
                received_events_url: 'https://api.github.com/users/defunkt/received_events',
                type: 'User',
                site_admin: false
            },
        ];

        const users = spyOn(userService, 'getAll').and.callFake(() => of(mockUser));

        component.ngOnInit();

        expect(users).toHaveBeenCalled();
    } );

});
