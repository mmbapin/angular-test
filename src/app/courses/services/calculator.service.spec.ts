
import { CalculatorService } from "./calculator.service";
import { TestBed, async } from '@angular/core/testing';
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {
  let calculator: CalculatorService,
      loggerSpy: any;
      beforeEach(() => {
        loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);
        TestBed.configureTestingModule({
          providers:[
            CalculatorService,
            {provide: LoggerService, useValue: loggerSpy}
          ]
        })
        calculator = TestBed.inject(CalculatorService);
        
      })
  it('should add two numbers', () => {
    const result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    const result = calculator.subtract(4, 2);
    expect(result).toBe(2);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
})