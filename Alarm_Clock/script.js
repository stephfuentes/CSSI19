// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

console.log("script is running...");

const basicAlarm = (alarmMessage) => {
    return alarmMessage;
  };

  console.log(basicAlarm("My alarm!"));
 
  function myAlarm (wakeup)
  {
      console.log("Hey, steph, wake up! It's"+wakeup);

  }

  myAlarm("7am")

  function momAlarm (wakeup)
  {
    console.log("Hey Mom, wake up!It's"+wakeup);

  }

  momAlarm("6:30am")

  function familyAlarm (wakeup,family)
{
    console.log("hey" + family + "wakeup its" + wakeup);

}

familyAlarm("7am","dad")


function importantAlarm (getup)
{
    console.log(getup.toUpperCase());
}
 importantAlarm("wake up, wakeup, wake up!! it's 6am")
 
 function snoozeAlarm ()
 {

 }