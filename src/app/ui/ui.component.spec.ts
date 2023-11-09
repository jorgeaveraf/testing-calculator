import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Ui Addition - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call addition method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 2;
     component.operator2 = 2;
 
     // Act
     component.addition();
     result = component.result;
 
     // Assert
     expect(result).toBe(4);
  });



  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(3.1416);
  });
 
  it('Should set operator2 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the addition button ', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let additionButton = fixture.debugElement.query(By.css('.addition-button'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(7.5);

   });

  it('Should render sum in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;
 
    // Act
    component.addition();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('10');
     
  });

});

describe('Ui Subtraction - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call subtraction method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.substraction();
    result = component.result;

    // Assert
    expect(result).toBe(0);
 });

 it('should substrac operator1 and operator2 when i click the subtraction button ', () => {
  // Arrange 
  component.operator1 = 5.0;
  component.operator2 = 2.5;
  let subtractionButton = fixture.debugElement.query(By.css('.substraction-button'));

  // Act
  subtractionButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(2.5);

 });

it('Should render subtraction in result div', () => {
  // Arrange
  component.operator1 = 5;
  component.operator2 = 5;

  // Act
  component.substraction();
  fixture.detectChanges();
  
  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  // Assert
  expect(el.innerText).toContain('0');
   
});

});

describe('Ui Multiplication - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call multiplication method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.multiplication();
    result = component.result;

    // Assert
    expect(result).toBe(4);
 });

 it('should multiply operator1 and operator2 when i click the multiplication button ', () => {
  // Arrange 
  component.operator1 = 5.0;
  component.operator2 = 2;
  let multiplicationButton = fixture.debugElement.query(By.css('.multiplication-button'));

  // Act
  multiplicationButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(10);

 });

it('Should render multiplication in result div', () => {
  // Arrange
  component.operator1 = 5;
  component.operator2 = 5;

  // Act
  component.multiplication();
  fixture.detectChanges();
  
  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  // Assert
  expect(el.innerText).toContain('25');
   
});

});

describe('Ui Division - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call division method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.division();
    result = component.result;

    // Assert
    expect(result).toBe(1);
 });

 it('should divide operator1 and operator2 when i click the division button ', () => {
  // Arrange 
  component.operator1 = 5.0;
  component.operator2 = 2;
  let divisionButton = fixture.debugElement.query(By.css('.division-button'));

  // Act
  divisionButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(2.5);

 });

it('Should render division in result div', () => {
  // Arrange
  component.operator1 = 5;
  component.operator2 = 5;

  // Act
  component.division();
  fixture.detectChanges();
  
  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  // Assert
  expect(el.innerText).toContain('1');
   
});

});

describe('Ui Sqrt - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call sqrt method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.sqrt();
    result = component.result;

    // Assert
    expect(result).toBeCloseTo(1.41);
 });

 it('should squared operator1 and operator2 when i click the sqrt button ', () => {
  // Arrange 
  component.operator1 = 5.0;
  component.operator2 = 2;
  let sqrtButton = fixture.debugElement.query(By.css('.sqrt-button'));

  // Act
  sqrtButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBeCloseTo(2.2360);

 });

it('Should render sqrt in result div', () => {
  // Arrange
  component.operator1 = 5;
  component.operator2 = 5;

  // Act
  component.sqrt();
  fixture.detectChanges();
  
  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  // Assert
  expect(el.innerText).toContain('2.23');
   
});

});