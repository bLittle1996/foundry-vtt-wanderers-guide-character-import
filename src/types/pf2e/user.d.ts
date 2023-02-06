export declare class UserPF2e extends User {
  flags: {
    [key: string]: Record<string, unknown>;
    pf2e: {
      settings: UserSettingsPF2e;
    };
  };
}

interface UserSettingsPF2e {
  showEffectPanel: boolean;
  showRollDialogs: boolean;
  monochromeDarkvision: boolean;
  searchPackContents: boolean;
}
