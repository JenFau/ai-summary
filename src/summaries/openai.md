---
title: OpenAI Updates
source: googleworkspace
last_updated: 2025-08-12T13:46:23.095Z
layout: post.njk
tags: [googleworkspace]
summary: |
  AI tool updates from the Google Workspace blog RSS feed.
---

## 12 August 2025

### [Adding NotebookLM and Gems to Gemini Learning Tools Interoperability (LTI™)](http://workspaceupdates.googleblog.com/2025/08/adding-notebooklm-gems-gemini-lti.html) (12/08/2025)

What’s changing 
Last year, we introduced Gemini LTI™, an AI-powered assistant that can integrate into third party Learning Management Systems (LMS). Gemini LTI™ helps enhance the educational experience for both educators and students by providing AI-driven tools and features powered by Gemini within their LMS environment, such as Canvas by Instructure and PowerSchool Schoology Learning. 


Today, we’re excited to announce that NotebookLM and Gems are now integrated with Gemini LTI™. As a result, educators can create Notebooks or Gems per week/topic and publish them within Gemini LTI. These Notebooks or Gems can include relevant teaching materials and act as an additional resource for students to use while learning.


For example, educators can:

Create content-grounded Notebooks that help define their curriculum and empower students to learn at their own pace. 
Create Gems for FAQs that help students quickly find answers to common questions about assignments, and more. 



For example, students can: 

Learn on-the-go by creating a podcast-like Audio Overview of their course material with NotebookLM 
Get in-the-moment assistance with real-time coaching using Gems. 







Who’s impacted 
Admins and end users 


Additional details 
Gemini LTI™ is part of Google Workspace LTI™, our suite of LTI™ tools, including Assignments LTI™, Google Drive LTI™, and Google Meet LTI™. Visit our Help Center to learn more about Workspace LTI™. 


Getting started 

Admins: 

In order for educators and students to access the Gemini LTI™, you’ll need to enable Google Workspace LTI™ service in Admin Console and enable Gemini service in Admin Console. Visit the Help Center to learn more about Gemini LTI in general. 
Learning Management Systems admins need to enable Gemini LTI™ in their LMS as well. Visit the Help Center to learn more about setting up Gemini LTI in Canvas by Instructure and Powerschool Schoology Learning. 

End users: 

Visit the Help Center to learn more about Gemini LTI. 



Rollout pace 

Rapid Release and Scheduled Release domains: Gradual rollout (up to 15 days for feature visibility) starting on August 4, 2025 



Availability 
Available for Google Workspace: 

Education Fundamentals, Standard, and Plus 
Customers with the Gemini Education or Gemini Education Premium add-on 



Resources 

Google Workspace Admin Help: Learn how to turn on Google Workspace LTI™ 
Google Workspace Admin Help: Turn the Gemini app on or off 
Google Workspace Admin Help: Set up Assignments LTI™/Drive LTI™ in Canvas 
Google Help: Google Workspace LTI™ overview


### [Deploy Context-Aware Access levels in “Warn” mode](http://workspaceupdates.googleblog.com/2025/08/context-aware-access-levels-warn-mode.html) (11/08/2025)

What’s changing 
Admins can now select “Warn” as an action when deploying context-aware access (CAA) levels. When applied, end users will see a warning message if they do not meet their admin defined conditions for accessing Google Workspace applications. They can click “See details” to see more information about why they received the warning – for example, they may be notified that their operating system is outdated and requires an update. The warning provides a useful reminder for the user to take action otherwise access could be blocked in the future. 


It’s important to note that “Warn” mode will not block users from accessing a particular app or service and they will have the option to proceed despite the warning. “Warn” mode helps educate users if they’re trying to access apps in a less secure situation and how to remediate this risk, while reducing the workload required by admins to socialize best practices. 

Example of a warning notification 






Example of what a user might see when they click “See details” 


Additional details 

Warning messages will be shown to users once every 48 hours if their device and session continues to not meet access levels to ensure minimizing end user friction. 
"Access Warning Sent” and “Access Warning Viewed by User” events can be reviewed in the CAA audit logs and in the security investigation tool for select Google Workspace customers. 



Getting started 

Admins: 

“Warn mode” can be assigned to existing CAA levels and new access levels in the Admin console. CAA levels can be applied at the OU and Group levels. Visit the Help Center to learn more about assigning Context-Aware access levels to apps. 
You can also manage end user remediation messages to help users to unblock apps with remediation messages in Context Aware Access.  

End users: Depending on your admin configuration, you may see warning messages when trying to access apps under certain conditions. 





Admin app access level assignment flow


Rollout pace 

Rapid Release and Scheduled Release domains: Gradual rollout (up to 15 days for feature visibility) starting on August 5, 2025. 



Availability 
Available for Google Workspace: 

Frontline Standard and Frontline Plus 
Enterprise Standard and Enterprise Plus 
Education Standard and Education Plus 
Enterprise Essentials Plus 
Cloud Identity Premium 



Resources 

Google Workspace Admin Help: Protect your business with Context-Aware Access 
Google Workspace Admin Help: Context-Aware Access overview 
Google Workspace Admin Help: Create Context-Aware access levels 
Google Workspace Admin Help: Assign Context-Aware access levels to apps 
Google Workspace Admin Help: Context-Aware Access log events


### [Use Gemini in Google Docs to generate images on Android devices](http://workspaceupdates.googleblog.com/2025/08/gemini-google-docs-generate-images-android.html) (11/08/2025)

Building upon the ability to generate images using Gemini in Google Docs on web, we’re excited to announce you can now generate images in Docs on your Android mobile device. Once you select the image, you can then save it, copy it, or insert it into a document. Visit the Help Center to learn more about using Gemini in Google Docs.




Rollout Pace
Rapid and Scheduled release domains: Gradual rollout (up to 14 days for feature visibility) staring on August 8, 2025. 

Availability
Available to Business Standard and Plus; Enterprise Standard and Plus; Google AI Pro and Ultra, customers with the Gemini Education or Gemini Education Premium add-on, and anyone who previously purchased a Gemini Business or Gemini Enterprise add-on.


### [Granular OAuth consent in Google Apps Editor Add-ons](http://workspaceupdates.googleblog.com/2025/08/granular-oauth-consent-in-google-apps.html) (11/08/2025)

What’s changing 
Earlier this year,  we launched an improved version of the OAuth consent screen to the Apps Script IDE and unpublished Editor Add-ons that allows users to specify which individual scopes they would like to authorize for that script. For example, if a script requests access to a user’s Sheets and Forms files, and the users only intends to use the script with Sheets files, they can decide to only allow access to their spreadsheets and not their forms. 





This screenshot shows the new OAuth consent screen, which lets the user provide consent for a subset of the requested OAuth scopes. 


We’re excited to announce that this more granular OAuth consent screen will be expanding to an additional Apps Script execution type. Soon, published Editor add-ons powered by Apps Script will also present users with this more granular consent screen when requesting an OAuth grant. This will allow users of these add-on types to provide partial OAuth consent when authorizing new add-ons. A reminder that this also includes reconsenting to add-ons when OAuth grants expire.


Additional details 
To prepare for the release of this new consent flow, we suggest that Editor add-on developers refer to the ScriptApp and AuthorizationInfo classes. These allow Apps Script developers to programmatically interact with the scopes granted for a script. This allows developers to put in such safeguards as short-circuiting a script execution if not all scopes are granted. For more information, refer to the developer documentation. To test these changes, please see the documentation on Testing Editor Addons. 


Getting Started 

Admins: There is no admin control for this feature.

Developers and end users: 
This new consent screen will only be used for new OAuth scope grants. Pre-existing scope grants will not be affected, so no action is required by users on scripts they’ve already authorized. 



Rollout pace 

Rapid Release and Scheduled Release domains: Extended rollout (potentially longer than 15 days for feature visibility) starting on Aug 19, 2025. 



Availability 

Available to all Google Workspace customers and Workspace Individual Subscribers


### [Full screen for screen sharing](http://workspaceupdates.googleblog.com/2025/08/full-screen-google-meet.html) (11/08/2025)

What’s changing 
Starting today, the full screen action appears when viewing a presentation or sharing your screen. This option increases the size of the presentation by maximizing the Meet UI and reducing the size of meeting participants using sidebar view. 



Getting started 

Admins: There is no admin control for this feature. 
End users: 
To use this feature, select the “Enter Full Screen” action at the bottom of an active presentation. Check out this Help Center for details. 



Rollout pace 

Rapid Release domains: Extended rollout (potentially longer than 15 days for feature visibility) starting on July 29th, 2025 
Scheduled Release domains: Full rollout (1–3 days for feature visibility) starting on August 14th, 2025 



Availability

Available to all Google Workspace customers, Google Workspace Individual subscribers, and users with personal Google accounts


### [Use Gemini to create illustrated storybooks](http://workspaceupdates.googleblog.com/2025/08/gemini-storybook-illustrated-audio-visual.html) (07/08/2025)

You can now use Gemini to craft personalized, illustrated storybooks about any topic with read-aloud narration. 
What’s changing 
You can now use Gemini to craft personalized, illustrated storybooks about any topic with read-aloud narration. You can create a story by simply describing the storybook you want in a prompt (e.g. “Create a storybook for my 2 and 4 yo daughters explaining my career to them based on my uploaded resume and photo”), or by using the new pre-made Storybook Gem, and Gemini will create a unique 10-page illustrated storybook complete with custom audio narration. You can also add content like photos and other files to teach a lesson through visual storytelling, explore moments in the past, or use it as a vibrant canvas for imaginative fiction. 



 A storybook in Gemini is created with illustrations and text based on a user’s prompt. 


Additional details 

This feature is available in all languages and regions supported by the Gemini app. 
At this time, storybooks are available to users 18+. 
At this time, Google Workspace business and education users cannot share storybooks. However, if a user with a personal account shares a link to a storybook, Workspace users will be able to open it, but they cannot take additional actions, such as asking Gemini to refine the content. 



Getting started 

Admins: This feature is available in the Gemini app by default. There are no admin controls for this feature. 
End users: Visit the Help Center to learn more about creating illustrated storybooks in the Gemini app. 



Rollout pace 

Web: Available now 
Mobile: Gradual rollout (up to 15 days for feature visibility) 



Availability 
Available for Google Workspace: 

Business Starter, Standard, Plus 
Enterprise Starter, Standard, Plus 
Education Fundamentals, Standard, Plus 
Frontline Starter and Standard 
Essentials, Enterprise Essentials, Enterprise Essentials Plus 
Nonprofits 

Available for Google Workspace customers with these add-ons: 

Gemini Business* 
Gemini Enterprise* 
Gemini Education 
Gemini Education Premium 



*As of January 15, 2025, we’re no longer offering the Gemini Business and Gemini Enterprise add-ons for sale. Please refer to this announcement for more details. 


Resources 

The Keyword: Create personal illustrated storybooks in the Gemini app 
Google Help: Create an illustrated storybook in Gemini Apps


### [Language expansion for “suggested next steps” when using “Take Notes for Me” ](http://workspaceupdates.googleblog.com/2025/08/more-languages-suggested-next-steps-take-notes-google-meet-gemini.html) (07/08/2025)

Today, we’re expanding the language availability for “suggested next steps” to include:French, German, Italian, Japanese, Korean, Portuguese, and Spanish
Earlier this year, we announced that “take notes for me” will capture next steps discussed during the meeting in a new “suggested next steps” section. Powered by AI, these next steps and follow-ups will automatically be identified and organized within the meeting notes document. 

Today, we’re expanding the language availability for “suggested next steps” to include: 

French 
German 
Italian 
Japanese 
Korean 
Portuguese 
Spanish 

When discussing next steps, follow up items or action items, they will automatically be captured when speaking these languages. 


Rollout: 

Extended rollout (potentially longer than 15 days for feature visibility) started in Rapid Release and Scheduled release domains on August 7, 2025



Getting Started:

Admins: Visit the Help Center to learn more about allowing Google Meet AI to take notes for my users. 
End users: Visit the Help Center to learn more about using "Take notes for me" in Google Meet. 



Availability:

“Take notes for me” is available to Business Standard and Business Plus; Enterprise Standard and Enterprise Plus; the Gemini Education and Education Premium add-on and those customers who previously purchased a Gemini Business or AI Meetings & Messages add-on.


### [Google Meet logs will now show encryption type for call endpoints](http://workspaceupdates.googleblog.com/2025/08/meet-cse-audit-log-encryption-type.html) (07/08/2025)

We’re adding an additional data field for Google Meet log events: encryption_type, which will indicate whether standard cloud encryption or client-side encryption was used for a call endpoint.
What's Changing
We’re adding an additional data field for Google Meet log events: encryption_type, which will indicate whether standard cloud encryption or client-side encryption was used for a call endpoint. This information can also be called using the Admin Reports SDK API under the values: cloud_encryption and cse_encryption.



Example of a meeting without client-side encryption and a meeting with standard encryption. The encryption type will be captured in Meet log events going forward.
Rollout Pace:
Rolling out now to Rapid Release and Scheduled Release domains. 


Availability:
Available in the audit and investigation tool for all Google Workspace customers and for select Google Workspace customers in the Security Investigation tool, as well as the Admin Reports SDK API.


### [Receive more in-depth responses from Gemini in Google Drive on PDF queries ](http://workspaceupdates.googleblog.com/2025/08/google-drive-gemini-long-context-large-pdf.html) (07/08/2025)

Today, we're excited to announce that Drive now leverages a 1M token context window with large PDFs that will provide users with more helpful, comprehensive responses. 
What’s changing 
Last year, we introduced the ability to use Gemini in Google Drive to interact with PDFs and recently integrated this experience into Drive’s overlay file previewer.


Today, we're excited to announce that Drive now leverages a 1M token context window with large PDFs that will provide users with more helpful, comprehensive responses. 





Getting started 

Admins: To access Gemini in the side panel of Workspace apps, users need to have smart features and personalization turned on. Admins can turn on default personalization setting for their users in the Admin console. 
End users: Visit the Help Center to learn more about collaborating with Gemini in Google Drive. 



Rollout pace 

Rapid Release and Scheduled Release domains: Currently available. 



Availability 
Available for Google Workspace: 

Business Standard and Plus 
Enterprise Standard and Plus 
Customers with the Gemini Education or Gemini Education Premium add-on 
Google One AI Premium 



Anyone who previously purchased these add-ons will also receive this feature: 

Gemini Business* 
Gemini Enterprise* 



*As of January 15, 2025, we’re no longer offering the Gemini Business and Gemini Enterprise add-ons for sale. Please refer to this announcement for more details. 


Resources 

Google Workspace Admin Help: Turn on or off Gmail, Chat, and Meet smart features and personalization (Region specific) 
Google Help: Collaborate with Gemini in Google Drive


### [New study tools in the Gemini app to help you learn more effectively](http://workspaceupdates.googleblog.com/2025/08/gemini-study-tools.html) (06/08/2025)

We’re introducing several new features in the Gemini app designed to create a more dynamic and effective learning experience. These tools are built to help you understand complex topics more deeply, prepare for exams more efficiently, and engage with educational content in new ways. 
What’s changing 
We’re introducing several new features in the Gemini app designed to create a more dynamic and effective learning experience. These tools are built to help you understand complex topics more deeply, prepare for exams more efficiently, and engage with educational content in new ways. Now you can use the Gemini app to: 



Build a deeper understanding with Guided Learning: Instead of giving you an answer, Guided Learning walks you through subjects step-by-step, breaking down complex information and providing interactive help along the way. It’s perfect for working through the process of understanding, retaining and mastering a new topic or skill. 
Prepare for exams with helpful study tools: We recently announced you can create quizzes in Canvas in the Gemini app. Now, you can customize the number of questions as well as the question type - for example, multiple choice or short answer. You can also ask Gemini to instantly create flashcards and study guides based on your quiz results or other class materials, providing a simple and effective way to review key concepts and reinforce your learning. 
Understand information more easily with integrated visuals and YouTube videos: To make learning more engaging and effective, Gemini will now automatically integrate relevant visuals, like high-quality diagrams, images, and YouTube videos, directly into its responses to help you learn. 



Guided Learning in Gemini breaks down complex topics and provides step-by-step, interactive help
Additional details 


These features are available in all languages and regions supported by the Gemini app. 
Guided Learning and integrated visuals and YouTube videos are available to Gemini app users of all ages. Quizzes, flashcards and study guides are available to users 18+ at this time. 
Some features are only available on the Gemini web app (gemini.google.com) and mobile web. 
At this time, Google Workspace business and education users cannot share content created in Canvas, which includes quizzes, flashcards and study guides. However, if a user with a personal account shares a link to content created in Canvas, Workspace users will be able to open it, but they cannot take additional actions, such as asking Gemini to refine the content. 



Getting started 

Admins: These features are available in the Gemini app by default. There are no admin controls for these features. 

For YouTube videos to be included in responses from Gemini, admins must ensure the YouTube service is enabled and access to other Google apps in the Gemini app is allowed. Learn more about how to manage your organization's YouTube settings and turn Google apps in Gemini on or off. 

End users: Visit the Help Center to learn more about creating quizzes, flashcards, and study guides and using learning tools in the Gemini app. 

For YouTube videos to be included in responses from Gemini, end users must enable YouTube as a connected app. Learn more about controlling connected app settings in the Gemini app. 



Rollout pace 

Gradual rollout for all features (up to 15 days for feature visibility) starting on July 31, 2025. 



Availability 
Available for Google Workspace: 

Business Starter, Standard, Plus 
Enterprise Starter, Standard, Plus 
Education Fundamentals, Standard, Plus 
Frontline Starter and Standard 
Essentials, Enterprise Essentials, Enterprise Essentials Plus 
Nonprofits 



Available for Google Workspace customers with these add-ons: 

Gemini Business* 
Gemini Enterprise* 
Gemini Education 
Gemini Education Premium 

*As of January 15, 2025, we’re no longer offering the Gemini Business and Gemini Enterprise add-ons for sale. Please refer to this announcement for more details. 


Resources 

Google Help: Use learning tools in Gemini Apps 
Google Help: Create quizzes, flashcards & more in Gemini Apps 
The Keyword: New Gemini app tools to help students learn, understand and study even better
The Keyword: Guided Learning in Gemini: From answers to understanding


### [Ask Gemini in Google Forms to suggest new questions ](http://workspaceupdates.googleblog.com/2025/08/gemini-google-forms-suggest-questions.html) (06/08/2025)

What’s changing 
Building upon our recent announcements of using Gemini in Google Forms to summarize form responses and quickly create a new form, we’re introducing an additional AI-powered feature that can help save you time. 


Starting today, Gemini can use existing form content to suggest new relevant question types, question text, and answer options. This update helps users expand and enhance their forms by covering key points using context-specific ideas. 


The “Suggest questions” button will be shown at the bottom  of a form when a form contains at least two questions. Once it's clicked, Gemini will generate two to four relevant questions with an option to choose the questions and insert them into the existing form. 





Who’s impacted 
End users 


Why you’d use it 
When creating a form, we know it can often be challenging to decide what question(s) to add next, with this feature, Gemini provides you with new ideas for questions without having to write a prompt. 


Additional details 
At this time, this feature does not support: 

The generation of questions in multi-section forms. 
The quiz-specific settings while generating questions in quizzes in Form. 



Getting started 

Admins: To access Gemini in the side panel of Workspace apps, users need to have smart features and personalization turned on. Admins can turn on the default personalization setting for their users in the Admin console. 
End users: 
When you have added at least two questions to your form, click “Suggest questions” and then choose which of the suggested questions you want to insert into the form.
Forms is currently available in the user’s local language, but AI features, such as the 'Suggest questions' feature, is only available in English at this time. 
Visit the Help Center to learn more about creating a form with Gemini in Google Forms. 



Rollout pace 

Rapid Release domains: Gradual rollout (up to 15 days for feature visibility) starting on Aug 5, 2025 
Scheduled Release domains: Gradual rollout (up to 15 days for feature visibility) starting on  Aug 19, 2025 



Availability 
Available for Google Workspace: 

Business Standard and Plus 
Enterprise Standard and Plus 
Customers with the Gemini Education or Gemini Education Premium add-on 
Google AI Pro and Ultra 

Anyone who previously purchased these add-ons will also receive this feature: 

Gemini Business* 
Gemini Enterprise* 

*As of January 15, 2025, we’re no longer offering the Gemini Business and Gemini Enterprise add-ons for sale. Please refer to this announcement for more details. 


Resources 

Google Workspace Admin Help: Manage Google Workspace smart features for your users 
Google Help: Create a form with Gemini in Google Forms


### [Upcoming changes to reboot, alert, and log settings for Google Meet hardware devices](http://workspaceupdates.googleblog.com/2025/08/meet-hardware-settings-update-reboot-alert-log-time-zone.html) (05/08/2025)

In the coming weeks, we will introduce changes to multiple settings in Google Meet hardware admin console that will offer new capabilities and a better experience for admins. These changes will impact the following settings: Alert configuration, Time zone, Log upload settings & Device state reporting, and Scheduled reboot.


What’s changing 
In the coming weeks, we will introduce changes to multiple settings in Google Meet hardware admin console that will offer new capabilities and a better experience for admins. These changes will impact the following settings: 

Alert configuration 
Time zone 
Log upload settings & Device state reporting 
Scheduled reboot 

While rolling out the new changes, there will be a 2-3 week period where both the new setting and old setting will be displayed. During this time, admins will see a banner in the admin console indicating this, as well as a banner indicating your previous configuration is being migrated. 


Alert configuration: 
Alerts will be more streamlined with a separate setting for Email alerts and SMS alerts. There will be one checkbox per SMS and per email alert. Options to select alerts for missing microphone, missing default camera, and other device and peripheral issues will be displayed for both email and text message alerts. 




The existing Alerts experience 





The updated, streamlined Alerts experience 



Time zone: 
We have simplified the time zone setting so it’s more customizable. The new time zone options allow admins to use the time zone configured during setup for their devices, manually select the time zone, use the device IP address, or location to detect the time zone. Note: Devices not running on ChromeOS are not supported by this feature.





The existing Time zone experience 




The updated, streamlined Time zone experience 



Log Upload Settings & Device State Reporting: 
Currently, there are three separate settings in the Admin console which control whether error reports, metrics, and logs are uploaded for troubleshooting purposes: 

Report diagnostics > Send Google usage metrics and logs to improve meeting room hardware 
Logs and feedback > Send Google usage metrics and logs periodically and after each meeting for troubleshooting purposes 
Error reporting > Send error reports to Google 

Going forward, this will be controlled by one unified setting found under Google Meet Hardware > Settings > Data Sharing. This update provides a more straightforward, easy to understand experience for Admins. 




The existing Log Upload Settings & Device State Reporting 




The updated Log Upload Settings & Device State Reporting 





Since we’re consolidating three separate settings into one, your previous selections will determine the default ON/OFF state for the new setting: 

If you have ANY of the three original settings disabled, the new unified setting will be OFF by default. 
If you have ALL three of the original settings enabled, the new unified setting will be ON by default. 

Additionally, the device state reporting will now be enabled for all Google Meet Hardware customers. Device state reporting provides essential insights for Google Meet hardware admins to actively manage GMH deployments, including device health, network connectivity to facilitate troubleshooting, proactive maintenance, and informed decision-making. 


Scheduled Reboot: 
Currently, you can set reboots to occur at a frequency (between 1-7 days). Soon, you'll be able to select specific days of the week for reboots. This change will make scheduled reboots happen more predictably. 





The existing Scheduled Reboot 





The Updated Scheduled Reboot 



We recommend that you review your settings to make sure you know when your devices will reboot. If you take no action on your reboot settings, they will be migrated as follows: 





  
  

    Reboot Frequency 
(Old Setting)
          Day 
      (New Setting)
  
1
        Daily
  
2, 3, 4, 5, 6
        Monday, Thursday
  
7
        Monday
  


Additional details 
Audit logs for all of the new simplified settings outlined in this post can be found under “Change application setting”. Legacy settings will continue to generate audit logs under the “Chromebox for meetings Device Setting Change” event until they are removed from the user interface. 


Getting started 

Admins: 
Scheduled reboot settings are applied at the OU level and respect the date and time zones of the specific devices within those OUs. Visit the Help Center to learn more about time zone and reboot settings for Google Meet  hardware devices.
Visit the Help Center to learn more about collecting Meet hardware system logs & how to contact support. 
End users: There is no end user action required. 



Rollout pace 

Rapid and Scheduled Release domains: Gradual rollout (up to 15 days for feature visibility) starting August 21, 2025 



Availability 

Available to all Google Workspace customers with Google Meet hardware devices


Resources 

Google Workspace Admin Help: Check time zone and reboot settings 
Google Workspace Admin Help: Get connectivity and peripherals alerts 
Google Workspace Admin Help: Collect Meet hardware system logs 
Google Meet Admin Help: Get support for Google Meet hardware


### [Automatic Room Check-in in Google Meet with Proximity Detection](http://workspaceupdates.googleblog.com/2025/08/automatic-room-check-in-in-google-meet.html) (04/08/2025)

To simplify the process of joining meetings for those using companion mode on laptops within a conference room, we're introducing automatic room check-in via ultrasound proximity detection.
What’s changing
To simplify the process of joining meetings for those using companion mode on laptops within a conference room, we're introducing automatic room check-in via ultrasound proximity detection. To automatically check you in, the green room uses your laptop’s microphone to detect an ultrasound signal from the conference room hardware, streamlining the process and eliminating unnecessary steps.




The "Use Companion mode" button is highlighted, prompting the user to click it to join the call.

Who’s impacted

Admins and end users

Why it’s important
To simplify joining meetings from a conference room and prevent disruptive audio feedback, Google Meet now intelligently guides you to the best joining option.


Meet intelligently knows when you are in a room using an ultrasonic signal, and highlights the “Use Companion mode” button before you even join the call. This wayfinding feature helps ensure a seamless, echo-free start to your meeting. When you join using the highlighted Companion mode button, you will also be automatically checked into the correct room. 

Additional Details

Improving Room Check-in from Greenroom: Today, when at least one Google Meet hardware device is on the call and the user clicks on “Use companion mode,” Meet will present an option to check-in to the room. Room Check-in by proximity will replace this experience.
Platform & Browser: Only supported on Meet web (meet.google.com) for Chrome. 
Supported pages: Proximity detection is limited to a call's greenroom and a brief period after joining companion mode
Unsupported pages: Proximity detection will not function on g.co/present or g.co/companion. However, it will detect once the user joins companion mode for a brief period after joining.
Google Meet hardware peripherals: We have tested and verified functionality only with certified peripheral devices. While other devices might work, they are not officially supported and we cannot guarantee their performance. 

Getting started

Admins: 

A “Proximity Detection” device setting will be available in the Admin console to better support needs of each organization. Admins have granular controls to enable or disable proximity detection on specific Google Meet hardware devices.
Proximity Detection is on by default. This feature will be automatically enabled on all Google Meet hardware devices. If you need to change this setting:

From the Device list page: Menu > Devices > Google Meet hardware > Devices > [checkbox of device on device list] > settings > [Proximity Detection entry point]
From the Device settings page: Menu > Devices > Google Meet hardware > Devices > [Select Device] > Device settings > [Proximity Detection entry point]




End users: 

The Companion mode entry point will be highlighted in the greenroom when the proximity detection signal is detected. 
After joining a meeting in Companion mode, the user will be automatically checked into the room. If you have dynamic tiles enabled you will also be prompted to use Face Match to identify your face so your Dynamic tile shows your name instead of the room name.
Proximity check-in not working? See the help documentation for troubleshooting tips. You can still check in manually after joining the call.





The companion mode entry point is highlighted to inform the user that the meeting room for this call has been detected.
Rollout pace

Rapid Release and Scheduled Release domains: Gradual rollout (up to 15 days for feature visibility) starting on August 4th, 2025

Availability

Available to all Google Workspace customers with Google Meet hardware devices

Resources

Google Workspace Admin Help: Turn proximity detection on or off
Google Meet Help: Use proximity detection with Google Meet


### [NotebookLM is now available to all education users](http://workspaceupdates.googleblog.com/2025/08/notebooklm-is-now-available-to-all.html) (04/08/2025)

We are expanding support for the NotebookLM for Google Workspace for Education users of all ages.
What’s changing 

We are expanding support for the NotebookLM for Google Workspace for Education users of all ages.


NotebookLM is covered under the Google Workspace for Education Terms of Service for all Workspace for Education users. Those terms include enterprise-grade data protections, so your data is not reviewed by anyone or otherwise used to train AI models. 



Who’s impacted 
Admins and end users 

Why you’d use it 
NotebookLM is an AI-powered thinking partner that helps you understand anything. It accelerates learning and knowledge sharing, with AI grounded on the documents that matters most to you. Educators and students can add their lesson plans, education standards, lecture notes and/or course readings to get real-time summaries, guided lesson plans, discussion questions, quizzes and more. They can also generate audio overviews to take learning on the go and make content more accessible, digestible and engaging.   

Additional details 

NotebookLM is available in 180+ regions where Gemini API is available and currently supports 35+ languages. Users can only upload sources from Workspace that they have permission to access. Furthermore, they can control who has access to their notebooks and set more granular permissions within each. Notebooks can only be shared within your organization. 


NotebookLM also supports compliance with industry regulations like FERPA and COPPA.



Getting started 

Admins: As a Core Workspace Service, NotebookLM is enabled by default for Workspace for Education institutions. Visit the Help Center to learn more about turning NotebookLM on or off for users.
End users: Visit the Help Center to learn more about NotebookLM. 

Rollout pace 


Rapid Release and Scheduled Release domains: Full rollout (1–4 days for feature visibility) starting on August 4, 2025

Availability 


Available for Google Workspace:

Education Fundamentals, Standard, and Plus


Resources 

Google Workspace Admin Help: Manage access to Gemini features in Workspace services 
Google Help: Get started with NotebookLM


### [Export Gemini Audit logs to BigQuery](http://workspaceupdates.googleblog.com/2025/08/export-gemini-audit-logs-to-bigquery.html) (04/08/2025)

Admins can export Gemini Audit logs to BigQuery Export for further analysis of user activity when interacting with Gemini across Workspace apps.
What’s changing 

We recently announced that Gemini Audit logs could be accessed through the Reporting API (Admin SDK), the security investigation tool and the audit investigation tool.


Admins can export Gemini Audit logs to BigQuery Export for further analysis of user activity when interacting with Gemini across Workspace apps.





Getting started 

Admins: Visit the Help Center to learn more about reporting logs and BigQuery.
End users: There is no end user impact or action required.

Rollout pace 


Rapid Release and Scheduled Release domains: Available now. 

Availability 

Exporting logs to BigQuery is available for Google Workspace:

Frontline Standard and Plus
Enterprise Standard and Plus
Education Standard and Plus
Enterprise Essentials Plus


Resources 

Google Workspace Admin Help: About reporting logs and BigQuery
Workspace Updates blog: Access Gemini Audit logs using the Reporting API, the security and audit investigation tools


### [Introducing enhanced  interoperability between Google Chat and Microsoft Teams — powered by NextPlane](http://workspaceupdates.googleblog.com/2025/08/enhanced-chat-interoperability.html) (01/08/2025)

To better support Google Workspace customers operating in multi-platform environments, interoperability between Google Chat and Microsoft Teams is now available through NextPlane OpenHub.
What’s changing 

To better support Google Workspace customers operating in multi-platform environments, interoperability between Google Chat and Microsoft Teams is now available through NextPlane OpenHub.


This solution enables real-time, cross-platform messaging and collaboration, allowing Chat and Teams users to communicate using their preferred platform. Users are not locked into a single platform as they can now switch between Chat and Teams at will, ensuring flexibility and continuity across collaboration environments. Please refer to this link for a full list of supported features, in addition to details on NextPlane’s:

Support for data residency, compliance requirements and business continuity 
Commitment to minimizing operational complexity
Optimization for Google Cloud Platform (GCP)
Usage-based licensing model





Getting started 

Admins: Learn more about NextPlane OpenHub and view their announcement from Cloud Next 2025
End users: There is no end user action required.

Rollout pace 


Rapid Release and Scheduled Release domains: Available now. 

Availability 


Available to all Google Workspace customers. Note that separate NextPlane licensing is required to enable interoperability.

Resources 

NextPlane Blog: Google and NextPlane Partner to Enhance Cross-Platform Collaboration for Google Workspace Customers


### [Build and deploy a single app across Chat, Gmail, Calendar, Drive and more with the Workspace add-ons framework](http://workspaceupdates.googleblog.com/2025/07/build-and-deploy-single-app-across-chat.html) (31/07/2025)

The ability for developers to build Google Chat apps using the Workspace add-on framework is now generally available.
What’s changing 

Previously available as part of the Google Workspace Developer Preview Program, we're excited to announce that the ability for developers to build Google Chat apps using the Workspace add-on framework is now generally available.


The Workspace add-ons framework makes it possible to build and maintain one app that works across multiple Workspace apps including Gmail, Calendar, Drive, and Chat. This reduces complexity and improves the experience for developers, system admins, and end-users. 






In Chat, Workspace add-ons can provide helpful features, such as:

Previewing links from Chat messages and taking action without leaving the conversation.
Automating tasks across Google Workspace applications.
Receiving  alerts or notifications from linked external services.
Combining external data from 3rd party apps and services with your data from Gmail, Chat, and Calendar. 





Additional details 

Lucid, developers of Lucidchart, Lucidspark, and Lucidscale, recently updated their existing Workspace Add-ons to now support Chat. These integrations with Google Chat enable link previews, quick search, and access management all within Chat.


See more details on the Lucidchart, Lucidspark, and Lucidscale integrations here.


Soon, other partners, including Asana, Confluence, Figma, HubSpot, Miro, Polly, ServiceNow, Trello, 1Password, and more will be releasing Chat apps built on the Workspace add-ons framework.




Upcoming ServiceNow integration with Chat





Upcoming Figma integration with Chat







Upcoming Miro integration with Chat



Getting started 

Developers: Visit the developer documentation to learn how Google Workspace add-ons work in Chat and other information to get started.

Apps Script developers can quickly build a Chat app as a Workspace Add-on using the Quickstart Guide, or using the Apps Script Chat app template.
Apps Script developers can also refer to this Youtube tutorial published by our Workspace Developer Relations team: Build a Chat app as a Google Workspace add-on with Apps Script. This details how to build a Chat app as a Google Workspace add-on with Apps Script and extend it to other Workspace applications (Calendar, Gmail, Drive, Docs, Sheets, and Slides). Source code links are available in the description as well.
Developers that would like to build a Chat app as a Workspace Add-on using HTTP services can follow this Quickstart Guide.
Our Google Workspace Developers YouTube channel has also published a video showing how a Chat app can configure Calendar events, and Gmail vacation responder settings: Build a Chat app as a Google Workspace add-on with Apps Script.

Admins: 

Admins can choose to admin-install Chat apps for their users, so that the Chat app will automatically be available for end users.
If admins allow users to install Chat apps from the Workspace Marketplace, end users can browse the Marketplace to discover and find Chat apps to install. 
Visit the Help Center to learn more about Getting started as a Marketplace app admin. 

End users: 

Install Chat apps from the Workspace Marketplace.
Visit the Help Center to learn more about Using apps in Google Chat.

Rollout pace 


Rapid Release and Scheduled Release domains: Available now.

Availability 


Chat apps are available to all Google Workspace customers, Workspace Individual Subscribers, and users with personal Google accounts
Developing Chat apps is available to all Google Workspace customers

Resources 

Google Workspace Admin Help: Install Marketplace apps for your organization 
Google Workspace Admin Help: Allow users to install Chat apps
Google Workspace Marketplace: Lucid for Google Chat
Youtube: Build a Chat app as a Google Workspace add-on with Apps Script


### [Train multiple models for AI classification for Google Drive on demand ](http://workspaceupdates.googleblog.com/2025/07/google-drive-ai-classification-updates-multi-model-support-on-demand-model-training.html) (30/07/2025)

We’re introducing several changes to make the act of training custom AI models for data classification in Google Drive more efficient, including multi-model support, on-demand training, and a refreshed UI!
What’s changing 
We’re introducing several changes to make the act of training custom AI models for data classification in Google Drive more efficient:

Multi-model Support: When AI classification first launched, the product supported training a single model for a single label field.  Now, customers can train up to five unique models.  Common use cases for multiple models are:

Models for different labels
Models for different fields of a single label
Multiple models for the same label & field combination, with different training datasets curated for separate audiences 






On-demand Training: Training AI classification models can be an interactive process.  With the former version of the product, the models would train on a predefined schedule.  Now, the administrator can decide when to train the model, initiating the training process on demand – enabling organizations to move at their own pace! 




Refreshed UI: We’ve redesigned the AI classification experience from the ground up with a new onboarding flow and model details page.  With the redesigned UI, Workspace Administrators will now see richer insights into the status of model training, metrics on their training data, model recall scores, and a history of their model versions. 


Who’s impacted 


Admins


Why it matters 


Powered by privacy-preserving AI models that can be uniquely trained on specific customer needs, AI classification automatically identifies, classifies, and labels files in Google Drive. This helps organizations standardize data classification and achieve labeling consistency at scale. Labels can then be used to trigger rules on files that can and cannot be shared through data loss prevention (DLP) controls, lifecycle management policies, as well as audit and reporting use cases. These latest enhancements give admins the flexibility to train models when they need to and for the specific and dynamic needs of their organization.


Getting started 

Admins: To access the Label Manager in the Admin console, go to https://admin.google.com/ac/dc/  or Security > Access and data control > Data classification). Visit the Help Center to learn more about labeling Google Drive files automatically using AI classification. 
End users: There is no end user setting for this feature.

Rollout pace 

Rapid Release and Scheduled Release domains: Gradual rollout (up to 15 days for feature visibility) starting on July 30th

Availability 
Available for Google Workspace:

Enterprise Plus
Frontline Plus
Gemini Education Premium add-on
Anyone who previously purchased these add-ons will also receive this feature: 

Gemini Enterprise*
AI Security*

*As of January 15, 2025, we’re no longer offering the Gemini Business and Gemini Enterprise add-ons for sale. Please refer to this announcement for more details.

Resources 

Label Google Drive files automatically using AI classification


### [Introducing Video Overviews and upgrades to the Studio panel in NotebookLM](http://workspaceupdates.googleblog.com/2025/07/video-overviews-studio-panel-updates-notebooklm.html) (30/07/2025)

Users can now turn documents, slides, charts and more into engaging explainer videos that are narrated by an AI voice. Video Overviews are expertly-crafted visual walkthroughs of the content you provide, pulling in images, diagrams, quotes, and numbers from your source material.
What’s changing 

Since introducing Audio Overviews last year, NotebookLM users have created podcast-like, detailed summaries of key topics from their uploaded sources. To build upon this functionality and provide users with a more educational and visual experience, we’re excited to introduce Video Overviews.


Users can now turn documents, slides, charts and more into engaging explainer videos that are narrated by an AI voice. Video Overviews are expertly-crafted visual walkthroughs of the content you provide, pulling in images, diagrams, quotes, and numbers from your source material. Similar to Audio Overviews, you’ll also have the option to customize your Video Overview by specifying topics to focus on, indicating your learning goals, describing the target audience, and much more. At this time, Video Overviews are only available to users over the age of 18. 


We’re also introducing upgrades to the Studio panel where you would create things such as audio overviews and notes in NotebookLM, which includes multiple audio overviews and content sharing. Specifically, users can now:

Generate multiple Audio Overviews in a single notebook. This means you can now create versions in different languages from the same source material, or generate a set of Audio Overviews that each focus on different subsections of your sources.
Generate shareable links for content like Audio Overviews and Video Overviews, which cannot be shared outside of your domain. 





Additional details


Video Overviews are now rolling out to all users in English, with support for more languages coming soon. 
Only users with access to your Notebook can view content you share via a shareable link.


Getting started 

Admins: There is no admin control for this feature. 
End users: Visit the Help Center to learn more about Video Overviews and NotebookLM.

Rollout pace 

This has already started to roll out targeting 100% the week of August 4, 2025. 

Availability 

Available to Workspace customers with access to NotebookLM. Visit the Help Center to learn more about NotebookLM features & access by Workspace edition

Resources 

Google Help: Learn about NotebookLM
Google Workspace Admin Help: Turn Google NotebookLM on or off for user


### [Audit log changes for select Google Meet hardware settings](http://workspaceupdates.googleblog.com/2025/07/audit-log-changes-for-select-google.html) (29/07/2025)

Starting August 7, 2025, audit logs for certain settings from Event > Chromebox for meetings device setting change will begin to be found under (Change/Create/Delete) Application setting. 
What’s changing 
Recently, we’ve made updates to the Google Meet Hardware audit logs experience. As we continue to make adjustments and remove references to outdated products (ie Chromebox), we are moving audit logs for certain settings from Event > Chromebox for meetings device setting change to Event >: 

Change Application Setting 
Create Application Setting 
Delete Application Setting  








Specifically, these settings are:

Device Settings:  

Release channel
Display power saving
Home screen
Call phones

Alerts:  

Alert recipients





Additional details 
Starting August 7, 2025, audit logs will begin to be found under (Change/Create/Delete) Application setting. While we make these updates, there will be a brief period of time where events for these settings will be logged under Chromebox for meetings device setting change and Change application setting (or Create/Delete). Starting August 28, 2025, these audit logs will no longer appear under Chromebox for meetings device setting change.
Getting started 

Admins: You’ll notice these changes automatically. 
End users: There is no end user impact or action required.

Rollout pace 

Rapid Release and Scheduled Release domains: Gradual rollout (up to 15 days for feature visibility) starting on August 7, 2025

Availability 

This change impacts all Google Workspace customers with Meet hardware devices

Resources 

Workspace Updates Blog: Improving Google Meet hardware admin log events with more granular information


### [Increased limits to Gemini 2.5 Pro for Gemini for Education users, free of charge](http://workspaceupdates.googleblog.com/2025/07/increased-limits-to-gemini-25-pro-for.html) (29/07/2025)

Gemini for Education provides default access to our premium AI models, and now comes with significantly higher limits than what consumers get at no cost, plus enterprise-grade data protection and an admin-managed experience as a core Workspace service. Students of all ages and educators can use Gemini for Education with higher limits to Gemini 2.5 Pro, free of charge.
What’s changing

Announced last month, Gemini for Education provides default access to our premium AI models, and now comes with significantly higher limits than what consumers get at no cost, plus enterprise-grade data protection and an admin-managed experience as a core Workspace service. Students of all ages and educators can use Gemini for Education with higher limits to Gemini 2.5 Pro, free of charge. Thanks to LearnLM, 2.5 Pro is the world’s leading model for learning, making it especially helpful in academic settings. 

Students of all ages and educators can use 2.5 Pro to: 

Prepare for exams with personalized practice quizzes

Break down complex topics step by step

Brainstorm and research ideas and get feedback on writing

Re-level texts and assignments

Increase student engagement by adjusting content to fit their interests


Additional details

Gemini 2.5 Pro is available to Gemini app users of all ages, with varying levels of access depending on subscription. Visit the Help Center to understand model availability. 


Getting started

Admins: There is no admin control for Gemini 2.5 Pro. The model is available in the Gemini app by default.

End users: Visit the Help Center to learn more about how to use Gemini 2.5 Pro and other Gemini app models, like Gemini 2.5 Flash, and Veo 3 Fast (preview). 


Availability
Gemini for Education is available for Google Workspace Education Fundamentals, Standard and Plus customers. 

Resources

Google Help: Gemini Apps limits & upgrades for Google AI subscribers

Google Help: Use Gemini Apps with a work or school Google Account

The Keyword: Gemini for Education now has significantly higher limits to 2.5 Pro, free of charge


### [Thumbnail previews will now show on video progress bar in Google Drive](http://workspaceupdates.googleblog.com/2025/07/thumbnail-previews-show-video-progress-google-drive-videos.html) (22/07/2025)

When hovering over a newly uploaded video’s progress bar in Google Drive, you’ll now see a thumbnail preview that allows you to quickly view and navigate to specific parts of a video.
What’s changing 
Starting today, when hovering over a newly uploaded video’s progress bar in Google Drive, you’ll see a thumbnail preview that allows you to quickly view and navigate to specific parts of a video. With the ability to find the right moments in videos, this update improves productivity and the overall video viewing experience in Google Drive. 



Getting started 

Admins: There is no admin control for this feature. 
End users: 

To use this feature, upload a new video to your Drive account (via web or mobile app) > open the newly uploaded video in Drive web > hover your mouse over the video progress bar to see thumbnail previews and drag your mouse along the progress bar to quickly scrub through the video using the thumbnails. 
Note: This feature is only available for newly uploaded videos. 
Visit the Help Center to learn more about finding specific video moments with thumbnail previews. 


Rollout pace 

Rapid Release domains: Extended rollout (potentially longer than 15 days for feature visibility) starting on July 22, 2025 
Scheduled Release domains: Full rollout (1–3 days for feature visibility) starting on August 20, 2025 

Availability 

Available to all Google Workspace customers, Google Workspace Individual subscribers, and users with personal Google accounts 

Resources 

Google Help: Store & play video in Google Drive


### [Google Workspace Updates Weekly Recap - July 18, 2025](http://workspaceupdates.googleblog.com/2025/07/release-notes-07-18-2025.html) (18/07/2025)

Learn about a few new features rolling out now across Workspace, see a recap of what was published on the Workspace Updates blog earlier this week, and review rollout completion information for previously announced features.
4 New updates

Unless otherwise indicated, the features below are available to all Google Workspace customers, and are fully launched or in the process of rolling out. Rollouts should take no more than 15 business days to complete if launching to both Rapid and Scheduled Release at the same time. If not, each stage of rollout should take no more than 15 business days to complete.

Enterprise security controls for Google Workspace with Gemini
 With its rapid adoption and growing importance, organizations are rightly concerned about potential data security and privacy risks when deploying generative AI. Google Workspace with Gemini is enterprise-ready. First, Gemini keeps customer data confidential and can support compliance with different regulatory frameworks, such as HIPAA and FedRAMP High. Second, Gemini is built with a layered defense strategy for prompt injection mitigation, an emerging attack vector against AI systems. And third, Workspace comes with granular user access and data security controls, helping administrators safely and securely deploy AI tools, such as the Gemini app, Gemini in Workspace apps, and NotebookLM, across their organizations with confidence.


Read the full blog post, “Enterprise security controls for Google Workspace with Gemini,” to learn more about: 

Protecting your data 
Understanding AI usage 
Deploying AI with flexibility 
Securing access points
Google AI Ultra for Business is now available in 75+ additional countries 
Recently, we introduced Google AI Ultra for Business, a new Workspace add-on that provides the highest access to AI features and models and access to next-generation AI tools. We’re pleased to announce that Google AI Ultra for Business is now available for purchase in 75+ additional countries, including those in the EU. The Gemini app, NotebookLM, Gemini in Workspace and Flow are available in all countries where the add-on is sold, but please note that access to Whisk and Project Mariner (US only) remains more limited at this time. | Rollout to Rapid Release and Scheduled Release domains is complete. | The Google AI Ultra for Business add-on is available for Google Workspace Business Starter, Standard, and Plus and Enterprise Starter, Standard, and Plus. | Learn more about how to get Google AI Ultra for Business.
Stay on Top of Your Work with Productivity Planner Gem 
We’re pleased to introduce our latest pre-made Gem: Productivity Planner. This Gem helps you save time by seamlessly bringing together information from your favorite productivity apps like Gmail, Calendar, and Drive to help you stay organized. Whether it's getting an overview of urgent emails or your calendar events for the week, Productivity Planner provides useful context to start your day or prioritize your most important tasks. | Rollout to Rapid Release and Scheduled Release domains is complete. | Available for Google Workspace Business Plus and Standard; Enterprise Plus and Standard; Gemini Enterprise and Gemini Business, as well as Google AI Ultra for Business. | Google Workspace Apps must be enabled for users to access the Gem.






Google Cloud Community update: we're upgrading to an improved forum experience
The Google Cloud Community forum is moving to a new home on Discourse on July 22, 2025. For key dates, details, FAQs and more, please refer to this post in the Google Cloud Community. As a reminder, the Google Cloud Community is the official community for Google Workspace administrators. Here, you can discuss the latest features with Googlers and other Google Workspace admins, learn tips and tricks, and more.
Previous announcements
The announcements below were published on the Workspace Updates blog earlier this week. Please refer to the original blog posts for complete details.

Now Generally Available: Migrate files from Microsoft SharePoint Online to Google Drive
 Earlier this year, we announced an open beta for migrating files from Microsoft SharePoint Online to Google Drive in the New Data Migration service. This functionality is now generally available. | Learn more about migrating files from Microsoft SharePoint Online to Google Drive.
  
Link your Google Calendar booking pages when composing emails in Gmail 
To make sharing your availability even easier, we’re adding the ability to share your Google Calendar appointment booking page directly in your email. | Learn more booking pages when composing emails in Gmail.
Use Gemini in Google Docs on iOS devices in 20+ languages 
We’re excited to bring the power of Gemini in Docs to your iOS devices so that you can more effectively understand, summarize, and ask questions about documents on mobile. | Learn more about Gemini in Docs on iOS devices.
Now generally available: extract and categorize data in AppSheet with the power of Gemini
AppSheet Enterprise Plus users can now add the new AI Task powered by Gemini, directly into their existing AppSheet automations. | Learn more about extracting and categorizing data in AppSheet with Gemini.
Completed rollouts

The features below completed their rollouts to Rapid Release domains, Scheduled Release domains, or both. Please refer to the original blog posts for additional details.


Rapid Release Domains: 

Automatically level audio across a video in Google Vids with balance sound
Link your Google Calendar booking pages when composing emails in Gmail
Manage email subscriptions from a single location in Gmail (Web)

Scheduled Release Domains: 

Use Gemini in Google Docs on Android devices in 20+ languages
Join a meeting using “companion mode” from Android and iOS tablets (iOS)
Live stream viewers can now send chat messages, plus additional host controls

Rapid and Scheduled Release Domains: 

Admins can now deploy Context-Aware Access for the NotebookLM app
Introducing more granular controls for multi-party approvals for sensitive admin actions
Providing support for Microsoft Office embedded files in Google Drive
Use Gemini in Google Drive to execute basic organizational tasks
Introducing Lucidchart and Lucidspark apps in Google Chat
Veo 3 is now available in the Gemini app for select Workspace users
Gemini summary cards now available in Gmail on web
Now generally available: extract and categorize data in AppSheet with the power of Gemini
See summaries of even more file types directly in Google Chat
Use Imagen 4 to generate images in Google Docs, Slides and Vids in multiple languages



For a recap of announcements in the past six months, check out What’s new in Google Workspace (recent releases).


### [Now generally available: extract and categorize data in AppSheet with the power of Gemini](http://workspaceupdates.googleblog.com/2025/07/appsheet-extract-and-categorize-with-gemini-generally-available.html) (16/07/2025)

AppSheet Enterprise Plus users can now add the new AI Task powered by Gemini, directly into their existing AppSheet automations.
What’s changing
AppSheet Enterprise Plus users can now add the new AI Task powered by Gemini, directly into their existing AppSheet automations. This allows AppSheet to automatically extract key information from uploaded photos, parse complex PDFs, and categorize, route, and prioritize incoming requests based on their content. Users can also quickly test individual steps within their workflow using the integrated AI Task Step Testing feature.


Beginning today, AI Task, as well as the “Extract” and “Categorize” functionality are now generally available for incorporation in your AppSheet automations. For more information, check out our Preview announcement.





Example of Gemini extracting book info from its cover



Additional details
We’ve also made a few additional improvements between preview and general availability:

AI tasks now support more types of columns and in particular columns of REF types so you can leverage information in linked tables.
You can now extract information not just from images and PDF files, but also from unstructured text data hosted in your data sources. In other words, you can select Text and LongText columns as inputs to the AI task.
For admins, the AppSheet admin console now shows how many credits your organization is entitled to, how many have been consumed, how they are being used by your users and your applications. Visit the AppSheet Help Center to learn more.

Additionally, running inline tests using the AI Task Step Testing feature will count towards your general AppSheet automation limits and entitled credits now that the feature is generally available.
Getting started

Admins: Admins can define governance policies to control or disable the use of AI Tasks powered by Gemini – learn more about controlling which app creators can use AI in automations.
End users: Visit the Help Center to quickly learn how to set up an AI Task in your own app or simply make a copy of this AppSheet template app.

Rollout pace

Available now.

Availability

Available for Google Workspace customers with AppSheet Enterprise Plus

Resources

AppSheet Help: Control which app creators can use AI in automations 
AppSheet Admin Help: Managing AppSheet AI credits
AppSheet Help: Extract information using AI
AppSheet Help: Categorize information using AI
AppSheet Help: Use AI in automations


### [Use Gemini in Google Docs on iOS devices in 20+ languages](http://workspaceupdates.googleblog.com/2025/07/use-gemini-in-google-docs-on-ios-devices.html) (16/07/2025)

We’re excited to bring the power of Gemini in Docs to your iOS devices so that you can more effectively understand, summarize, and ask questions about documents on mobile.
What’s changing
We’re excited to bring the power of Gemini in Docs to your iOS devices so that you can more effectively understand, summarize, and ask questions about documents on mobile. Gemini in Docs on iOS is available in 20+ languages. 




Gemini in the Google Docs app on an iPhone
Who’s impacted 
End users 
Why you’d use it
Gemini is included in Google Workspace business plans, allowing you to easily work on-the-go without switching apps or downloading a separate AI solution. Now you can use Gemini in Docs on iOS devices to: 

Get the gist of a long research report with an AI generated summary that you can read on your phone while commuting 
Ask Gemini questions about a specific detail buried in a budget document so that you can find the answers you need before a meeting 
Quickly create the first draft of a launch plan with a simple prompt after a team brainstorm while the details are fresh in your mind 

Additional details 

Certain features, such as Help me write, Help me create, and image generation are not available on mobile at this time. 
Getting started 

Admins: There is no admin control for this feature. 
End users: 

Access Gemini by tapping on the spark icon on the top app bar. You can then navigate through different actions such as, “summarize this document,” or “suggest improvements” options, or submit a prompt of your own. 
This feature is only available on iOS tablets and phones running iOS 16+. 
Visit the Help Center to learn more about collaborating with Gemini in Google Docs. 


Rollout pace

Rapid Release domains: Extended rollout (potentially longer than 15 days for feature visibility) starting on July 16, 2025 
Scheduled Release domains: Full rollout (1–3 days for feature visibility) starting on August 18, 2025 

Availability 
Available to Google Workspace: 

Business Standard and Plus 
Enterprise Standard and Plus 
Customers with the Gemini Education or Gemini Education Premium add-on 
Customers with the Gemini Business or Gemini Enterprise add-on* 

*As of January 15, 2025, we’re no longer offering the Gemini Business and Gemini Enterprise add-ons for sale. Please refer to this announcement for more details. 
Resources

Google Help: Supported languages for Gemini for Google Workspace 
Google Help: Use the side panel to collaborate with Gemini 
Google Help: Collaborate with Gemini in Google Docs



