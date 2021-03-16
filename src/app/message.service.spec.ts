import { MessageService } from './message.service';

describe('MessageService', () => {
  
  it('should have no messages to start', () => {
    let messageSvc = new MessageService(); // arrange & act

    expect(messageSvc.messages.length).toBe(0); // assert    
  })

  it('should add a new message to the list when add method is called', ()=> {
    let messageSvc = new MessageService();
    const msg = 'a message';

    messageSvc.add(msg);

    // expect(messageSvc.messages[0]).toBe(msg);
    // expect(messageSvc.messages.length).toBe(1);

    // Or using toEqual method // better

    expect(messageSvc.messages).toEqual([msg])

  })

});
