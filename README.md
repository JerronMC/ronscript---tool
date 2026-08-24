# RON SCRIPTS v3.2

RON SCRIPTS is a mobile/desktop skin-script hub with a lightweight randomized creator quest gate.

## Gate

- No CAPTCHA / Turnstile dependency.
- Step 1 generates a random 3-task creator mission each session.
- Each task opens the official creator page and uses a real-time return/dwell check.
- After all tasks, the site generates a random mini challenge (math, sequence, or word scramble).
- Step 2 launches the main library after the challenge passes.

### Important limitation
A static GitHub Pages site cannot securely inspect whether a user subscribed/followed a third-party YouTube/TikTok account. The gate verifies the on-site quest flow (opened task, return timing, and challenge), not private platform subscription state.

## Files

- `index.html` — structure and gate
- `style.css` — responsive UI
- `script.js` — library logic, Firebase, VIP, quest gate

## Privacy / safety
Do not put Firebase admin credentials or Turnstile secrets in this repository. The CAPTCHA dependency from v3.1 has been removed from this build.


## v3.4.0
- New quest UI with arrow → 30s return check → checkmark.
- No manual “I completed it” buttons.
- Added full-screen mode.
- Added visual UI style picker.
- Added custom language picker with search.
- Added mobile and desktop settings layouts.


## v3.4.0 changes
- Removed the comments feature and comment UI.
- Hidan 2 Transform and Argus x Sosuke Aizen are now VIP-protected.
- Added a creator-only VIP role manager using Firebase Authentication + the `creatorAdmins` collection.
- Added a close button for the Tester/Debug floating panel.
- Member IDs remain in local storage when normal settings are cleared.

### Creator VIP setup
1. Enable Google sign-in in Firebase Authentication.
2. Sign in to the site with the creator Google account.
3. In Firestore create `creatorAdmins/<creator_uid>` with `active: true`.
4. Use Firestore rules so only `creatorAdmins` can write `vipMembers`.

Example rule idea:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isCreator() {
      return request.auth != null &&
        exists(/databases/$(database)/documents/creatorAdmins/$(request.auth.uid)) &&
        get(/databases/$(database)/documents/creatorAdmins/$(request.auth.uid)).data.active == true;
    }
    match /vipMembers/{memberId} {
      allow read: if true;
      allow write: if isCreator();
    }
    match /vipRequests/{memberId} {
      allow create: if true;
      allow read, update, delete: if isCreator();
    }
    match /creatorAdmins/{uid} {
      allow read: if request.auth != null && request.auth.uid == uid;
      allow write: if false;
    }
  }
}
```
