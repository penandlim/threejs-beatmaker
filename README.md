# Threejs Beatmaker

## TODO
- [x] Build generic click handler for threejs objects through PickHelper
```javascript
  // Call raycast from camera to normalizedPosition and store the intersected object to pickHelper.hoveredObject
  pickHelper.pick(normalizedPosition, raycastableObjs, camera);
  // Calls pickHelper.hoveredObject.userData.classObject.onClick() 
  // Returns true if onClick was called successfully.
  pickHelper.execute();
```
- [x] Add scroll handler for PickHelper
```javascript
  // Call raycast from camera to normalizedPosition and store the intersected object to pickHelper.hoveredObject
  pickHelper.pick(normalizedPosition, raycastableObjs, camera);
  // Calls pickHelper.hoveredObject.userData.classObject.onScroll(deltaY) 
  // Returns true if onScroll was called successfully.
  pickHelper.scroll(deltaY);
  ```
- [x] Implement basic timeline (Play, Stop)
    * Clicking on the play icon triggers [Tone.Transport](https://tonejs.github.io/docs/13.8.25/Transport)
- [x] Scheduling notes by clicking on blocks
    * Schedules notes using [Tone.Transport.schedule](https://tonejs.github.io/docs/13.8.25/Transport)
- [x] Changing notes by scrolling on blocks
    * Added `onScroll(deltaY)` method to NoteBlock class.
    * `PickHelper` object calls `onScroll(deltaY)` with the object where raycast is successful and scroll is detected.
- [x] Create Track class, containing an array of NoteBlock objects.
    * A `Track` object contains an array of `NoteBlock` objs and respective instrument, model, and colors.
- [ ] Add basic track control & effects (Mute, Reverb, LR balance, LowFilter, etc)
- [ ] Allow changing instrument type (MembraneSynth, PolySynth, etc)
- [ ] Adjust instrument parameters with knobs
- [x] ~~Create a class storing instrument types, parameters, and notes.~~
    * Using `Tone.SynthOptions` interface from ToneJS library instead.
    * Note that `Tone.Instrument` has `set(options : SynthOptions)` and `get()` methods, allowing us to easily modify each Instrument's vocal settings.
- [x] Autosave / autoload notes to local storage in JSON format.
    * `StorageSystem` class deals with saving and loading various data.
- [ ] Allow uploading `SynthOptions[]` to NoSQL database.
- [ ] Fetch other `SynthOptions[]` from NoSQL database.
- [ ] Allow voting on other songs
- [ ] Allow searching songs by name