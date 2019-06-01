import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });

  it('add Test', () => {
    const service: MessageService = TestBed.get(MessageService);
    const result: string[] = ['1', '2'];
    service.add('1');
    service.add('2');
    expect(service.messages).toEqual(result);
  });

  it('clear Test', () => {
    const service: MessageService = TestBed.get(MessageService);
    const result: string[] = [];
    service.add('1');
    service.add('2');
    service.clear();
    expect(service.messages).toEqual(result);
  });
});
