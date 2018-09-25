import { ForgotModule } from './forgot.module';

describe('Forgot.Module.TsModule', () => {
  let forgotModuleTsModule: ForgotModule;

  beforeEach(() => {
    forgotModuleTsModule = new ForgotModule();
  });

  it('should create an instance', () => {
    expect(forgotModuleTsModule).toBeTruthy();
  });
});
