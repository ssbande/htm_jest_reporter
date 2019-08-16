import React from 'react';

const Settings = ({ showSettings }) => {
  return <div className={`settingsContainer ${showSettings ? 'settingsContainerActive' : ''}`}>
    <div className='setting'>
      <div>Show Graphs</div>
      <div>
        <input id="cbxGraphs" type="checkbox" />
        <label class="cbx" for="cbxGraphs">
          <div class="flip">
            <div class="front"></div>
            <div class="back">
              <svg width="16" height="14" viewBox="0 0 16 14">
                <path d="M2 8.5L6 12.5L14 1.5"></path>
              </svg>
            </div>
          </div>
        </label>
      </div>
    </div>
    <div className='setting'>
      <div>Show failing tests only</div>
      <div>
        <input id="cbxFailingOnly" type="checkbox" />
        <label class="cbx" for="cbxFailingOnly">
          <div class="flip">
            <div class="front"></div>
            <div class="back">
              <svg width="16" height="14" viewBox="0 0 16 14">
                <path d="M2 8.5L6 12.5L14 1.5"></path>
              </svg>
            </div>
          </div>
        </label>
      </div>
    </div>
    <div className='setting'>
      <div>Order suites by location</div>
      <div>
        <input id="cbxSuiteLocation" type="checkbox" />
        <label class="cbx" for="cbxSuiteLocation">
          <div class="flip">
            <div class="front"></div>
            <div class="back">
              <svg width="16" height="14" viewBox="0 0 16 14">
                <path d="M2 8.5L6 12.5L14 1.5"></path>
              </svg>
            </div>
          </div>
        </label>
      </div>
    </div>
  </div>
}

export default Settings;