# Threejs Beatmaker

## TODO
- [x] ~~Build generic click handler for threejs objects through PickHelper~~
```javascript
  // Call raycast from camera to normalizedPosition and store the intersected object to pickHelper.hoveredObject
  pickHelper.pick(normalizedPosition, raycastableObjs, camera);
  // Calls pickHelper.hoveredObject.userData.classObject.onClick() 
  // Returns true if onClick was called successfully.
  pickHelper.execute();
```
- [x] ~~Add scroll handler for PickHelper~~
```javascript
  // Call raycast from camera to normalizedPosition and store the intersected object to pickHelper.hoveredObject
  pickHelper.pick(normalizedPosition, raycastableObjs, camera);
  // Calls pickHelper.hoveredObject.userData.classObject.onScroll(deltaY) 
  // Returns true if onScroll was called successfully.
  pickHelper.scroll(deltaY);
  ```
- [x] ~~Implement basic timeline (Play, Stop)~~
- [x] ~~Scheduling notes by clicking on blocks~~
- [x] ~~Changing notes by scrolling on blocks~~
- [ ] Add basic track control (Mute, Reverb, LR balance, LowFilter, etc)
- [ ] Allow changing instrument type (MembraneSynth, PolySynth, etc)
- [ ] Adjust instrument parameters with knobs
- [ ] Build an object "SongData" storing instrument types, parameters, and notes.
- [ ] Autosave / autoload SongData to local storage.
- [ ] Allow uploading SongData to NoSQL database.
- [ ] Fetch other SongData from NoSQL database.
- [ ] Allow voting on other SongDatas
- [ ] Allow searching SongDatas by name