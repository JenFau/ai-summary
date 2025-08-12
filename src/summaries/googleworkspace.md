
---
 title: Google Workspace Updates
source: googleworkspace
last_updated: 2025-08-12T17:02:20.227Z
layout: post.njk
tags: [googleworkspace]
summary: |
  AI tool updates from the Google Workspace blog RSS feed.
---

 =## 12 August 2025

### 12 Aug 2025 – Adding NotebookLM and Gems to Gemini Learning Tools Interoperability (LTI™)
[Read more](http://workspaceupdates.googleblog.com/2025/08/adding-notebooklm-gems-gemini-lti.html)

Google is enhancing its Gemini LTI™, an AI-powered assistant integrated into third-party Learning Management Systems like Canvas and PowerSchool Schoology, by adding NotebookLM and Gems features. Educators can now create and publish Notebooks and Gems as additional resources within Gemini LTI™, providing curriculum-aligned materials and FAQs to support student learning. Students benefit from tools like audio course overviews and real-time coaching. Admins must enable Gemini and Google Workspace LTI™ services in their Admin Console and LMS to access these features. The rollout begins August 4, 2025, with availability for Google Workspace Education editions and Gemini Education add-ons, supporting a more interactive and AI-driven educational experience.

### 11 Aug 2025 – Deploy Context-Aware Access levels in “Warn” mode
[Read more](http://workspaceupdates.googleblog.com/2025/08/context-aware-access-levels-warn-mode.html)

Google Workspace admins can now use a new “Warn” action when deploying Context-Aware Access (CAA) levels, which displays a warning to users who don’t meet access conditions without blocking their access. This warning explains the issue—such as an outdated OS—and encourages remediation, helping educate users about security risks while reducing admin workload. Warnings appear once every 48 hours if conditions remain unmet, and related events are logged for admin review. “Warn mode” can be assigned to existing or new CAA levels at the OU or Group level via the Admin console. The feature is rolling out gradually from August 5, 2025, and is available across various Google Workspace editions including Enterprise, Education, Frontline, and Cloud Identity Premium. Additional support and configuration guidance are provided through Google Workspace Admin Help resources.

### 11 Aug 2025 – Use Gemini in Google Docs to generate images on Android devices
[Read more](http://workspaceupdates.googleblog.com/2025/08/gemini-google-docs-generate-images-android.html)

Building on the ability to generate images using Gemini in Google Docs on the web, users can now create images directly within Docs on Android devices, with options to save, copy, or insert them into documents. This feature will gradually roll out over 14 days starting August 8, 2025, and is available to Business Standard and Plus; Enterprise Standard and Plus; Google AI Pro and Ultra customers; those with Gemini Education or Education Premium add-ons; and previous purchasers of Gemini Business or Enterprise add-ons. For more details, visit the Help Center.

### 11 Aug 2025 – Granular OAuth consent in Google Apps Editor Add-ons
[Read more](http://workspaceupdates.googleblog.com/2025/08/granular-oauth-consent-in-google-apps.html)

Earlier this year, Google introduced an improved OAuth consent screen in the Apps Script IDE and unpublished Editor add-ons, allowing users to selectively authorize individual OAuth scopes for scripts. This granular consent option will soon expand to published Editor add-ons, enabling users to grant partial OAuth permissions when installing or reauthorizing add-ons. Developers are encouraged to use the ScriptApp and AuthorizationInfo classes to manage granted scopes and handle partial consents programmatically. The new consent flow applies only to new OAuth grants and does not affect existing authorizations. The feature will roll out starting August 19, 2025, across Rapid and Scheduled Release domains, with availability for all Google Workspace customers and Workspace Individual Subscribers; there is no admin control for this change.

### 11 Aug 2025 – Full screen for screen sharing
[Read more](http://workspaceupdates.googleblog.com/2025/08/full-screen-google-meet.html)

Starting July 29th, 2025, a full screen option will appear when viewing presentations or sharing your screen in Google Meet, enlarging the presentation by maximizing the Meet interface and minimizing participant thumbnails in sidebar view. Admins have no control over this feature, while end users can enable it by selecting “Enter Full Screen” at the bottom of an active presentation. The rollout begins with an extended release of up to 15 days for Rapid Release domains, followed by a full rollout within 1-3 days for Scheduled Release domains starting August 14th, 2025. This feature will be available to all Google Workspace customers, Google Workspace Individual subscribers, and personal Google account users.

### 07 Aug 2025 – Use Gemini to create illustrated storybooks
[Read more](http://workspaceupdates.googleblog.com/2025/08/gemini-storybook-illustrated-audio-visual.html)

Gemini now allows users 18 and older to create personalized, illustrated 10-page storybooks on any topic with read-aloud narration by simply providing a prompt or using the new Storybook Gem. These storybooks can include photos and other files for visual storytelling, making them useful for lessons, exploring memories, or imaginative fiction. Available in all Gemini-supported languages and regions, this feature is enabled by default in the Gemini app with no admin controls. While Google Workspace business and education users cannot share or edit storybooks, they can view shared links from personal accounts. The feature is available on the web immediately and rolling out to mobile over 15 days, supporting various Google Workspace plans and add-ons, though Gemini Business and Enterprise add-ons will no longer be sold after January 15, 2025.

### 07 Aug 2025 – Language expansion for “suggested next steps” when using “Take Notes for Me” 
[Read more](http://workspaceupdates.googleblog.com/2025/08/more-languages-suggested-next-steps-take-notes-google-meet-gemini.html)

Google Meet’s AI-powered “suggested next steps” feature, which automatically identifies and organizes follow-up items discussed during meetings in a dedicated section of the notes, is now available in French, German, Italian, Japanese, Korean, Portuguese, and Spanish. This expanded language support, announced on August 7, 2025, is rolling out over approximately 15 days in Rapid Release and Scheduled Release domains. The “take notes for me” feature is accessible to Business Standard and Plus, Enterprise Standard and Plus, Gemini Education and Education Premium add-on users, and customers with Gemini Business or AI Meetings & Messages add-ons. Admins and end users can find more information and setup guidance via the Help Center.

### 07 Aug 2025 – Google Meet logs will now show encryption type for call endpoints
[Read more](http://workspaceupdates.googleblog.com/2025/08/meet-cse-audit-log-encryption-type.html)

Google Meet is introducing a new data field, encryption_type, in log events to specify whether a call endpoint used standard cloud encryption (cloud_encryption) or client-side encryption (cse_encryption). This information will be accessible via the Admin Reports SDK API and reflected in Meet log events moving forward. The update is currently rolling out to both Rapid Release and Scheduled Release domains and is available in the audit and investigation tool for all Google Workspace customers, as well as in the Security Investigation tool for select customers.

### 07 Aug 2025 – Receive more in-depth responses from Gemini in Google Drive on PDF queries 
[Read more](http://workspaceupdates.googleblog.com/2025/08/google-drive-gemini-long-context-large-pdf.html)

Google Drive now supports a 1 million token context window for large PDFs, enhancing Gemini-powered interactions to deliver more comprehensive and helpful responses. This update builds on last year’s integration of Gemini into Drive’s PDF previewer. To use Gemini in Workspace apps, admins must enable smart features and personalization for users, which can be managed via the Admin console. The feature is currently available for Business Standard and Plus, Enterprise Standard and Plus, Gemini Education add-ons, Google One AI Premium, and previous Gemini Business or Enterprise add-on customers, though Gemini Business and Enterprise add-ons will no longer be sold after January 15, 2025. For setup and collaboration guidance, users can consult Google Workspace Admin Help and the Google Help Center.

### 06 Aug 2025 – New study tools in the Gemini app to help you learn more effectively
[Read more](http://workspaceupdates.googleblog.com/2025/08/gemini-study-tools.html)

The Gemini app is introducing new features to enhance learning by helping users understand complex topics, prepare for exams, and engage with content more effectively. Key additions include Guided Learning, which offers step-by-step interactive explanations instead of direct answers; customizable quizzes with options for question type and number; instant creation of flashcards and study guides based on quiz results; and integration of relevant visuals and YouTube videos into responses to improve comprehension. These features are available across supported languages and regions, with some tools restricted to users 18 and older or available only on the web app. The rollout begins July 31, 2025, and applies to various Google Workspace plans and add-ons. Admins and users must enable certain settings, such as YouTube access, for full functionality. Resources and help guides are provided to assist with these updates.

### 06 Aug 2025 – Ask Gemini in Google Forms to suggest new questions 
[Read more](http://workspaceupdates.googleblog.com/2025/08/gemini-google-forms-suggest-questions.html)

Google Forms is introducing a new AI-powered feature using Gemini that suggests relevant new question types, texts, and answer options based on existing form content to help users easily expand and improve their forms. When a form has at least two questions, users can click a “Suggest questions” button to receive two to four contextual question suggestions to insert into their form without needing to write a prompt. This feature is currently only available in English, does not support multi-section forms or quiz-specific settings, and requires smart features and personalization to be enabled by admins. It will gradually roll out starting August 5, 2025 for Rapid Release domains and August 19, 2025 for Scheduled Release, and is available for select Google Workspace plans and Gemini add-on customers. More details and setup instructions are available in Google’s Help Center.

### 05 Aug 2025 – Upcoming changes to reboot, alert, and log settings for Google Meet hardware devices
[Read more](http://workspaceupdates.googleblog.com/2025/08/meet-hardware-settings-update-reboot-alert-log-time-zone.html)

In the coming weeks, Google will update multiple settings in the Google Meet hardware admin console—including alert configuration, time zone, log upload settings and device state reporting, and scheduled reboot—to provide enhanced capabilities and a better admin experience. Key changes include streamlined alert options separating email and SMS alerts, more customizable time zone settings with options based on device setup, IP, or location (excluding non-ChromeOS devices), and consolidation of three log upload settings into one unified data-sharing control that also enables device state reporting for all users. Scheduled reboots will gain the ability to select specific weekdays for rebooting, replacing the current frequency-based setup, with automatic migration of existing settings. During a 2-3 week transition, both old and new settings will be visible, accompanied by migration banners, while audit logs will track all changes. The rollout begins August 21, 2025, for all Google Workspace customers with Meet hardware, requiring no end-user action, and admins are encouraged to review and adjust settings as needed using Help Center resources.

### 04 Aug 2025 – Automatic Room Check-in in Google Meet with Proximity Detection
[Read more](http://workspaceupdates.googleblog.com/2025/08/automatic-room-check-in-in-google-meet.html)

Starting August 4, 2025, Google Meet introduces automatic room check-in via ultrasound proximity detection to simplify joining meetings in conference rooms using companion mode on laptops. When your laptop detects an ultrasound signal from the room’s conference hardware through its microphone, the greenroom highlights the “Use Companion mode” button to guide you for a seamless, echo-free start and automatically checks you into the correct room. This feature, available on Chrome at meet.google.com and enabled by default on Google Meet hardware, replaces the manual check-in prompt and supports Face Match for dynamic tiles. Admins can manage proximity detection settings per device via the Admin console. The rollout applies to all Google Workspace customers with certified Meet hardware, with help resources available for troubleshooting and setup.

### 04 Aug 2025 – NotebookLM is now available to all education users
[Read more](http://workspaceupdates.googleblog.com/2025/08/notebooklm-is-now-available-to-all.html)

Google is expanding support for NotebookLM, an AI-powered learning assistant, to all Google Workspace for Education users across all age groups. Covered under Google Workspace for Education’s Terms of Service, NotebookLM ensures enterprise-grade data protections, meaning user data isn’t reviewed or used to train AI models. It helps educators and students by providing real-time summaries, guided lesson plans, quizzes, audio overviews, and more, based on their own documents such as lesson plans and course readings. Available in 180+ regions and supporting 35+ languages, users can upload content they have permission to access and control sharing within their organization, with compliance to regulations like FERPA and COPPA. NotebookLM is enabled by default for Google Workspace for Education Fundamentals, Standard, and Plus editions, with rollout starting August 4, 2025, and admins can manage access through the Google Workspace Admin Console.

### 04 Aug 2025 – Export Gemini Audit logs to BigQuery
[Read more](http://workspaceupdates.googleblog.com/2025/08/export-gemini-audit-logs-to-bigquery.html)

Admins can now export Gemini Audit logs to BigQuery Export for advanced analysis of user interactions with Gemini across Workspace apps. Previously accessible via the Reporting API (Admin SDK), security investigation tool, and audit investigation tool, these logs can now be directly exported to BigQuery in supported Google Workspace editions—including Frontline, Enterprise, Education, and Enterprise Essentials Plus—available immediately for all Rapid and Scheduled Release domains. Admins can find more information in the Help Center, while end users are not impacted.

### 01 Aug 2025 – Introducing enhanced  interoperability between Google Chat and Microsoft Teams — powered by NextPlane
[Read more](http://workspaceupdates.googleblog.com/2025/08/enhanced-chat-interoperability.html)

Google Workspace now supports interoperability between Google Chat and Microsoft Teams through NextPlane OpenHub, enabling real-time cross-platform messaging and collaboration. This allows users to communicate seamlessly on their preferred platform without being locked in, enhancing flexibility and continuity in multi-platform environments. The solution supports data residency, compliance, business continuity, and is optimized for Google Cloud Platform, with a usage-based licensing model to minimize operational complexity. Available immediately to all Google Workspace customers, it requires separate NextPlane licensing, with no end user action needed. Admins can learn more from NextPlane’s announcement and related resources.

### 31 Jul 2025 – Build and deploy a single app across Chat, Gmail, Calendar, Drive and more with the Workspace add-ons framework
[Read more](http://workspaceupdates.googleblog.com/2025/07/build-and-deploy-single-app-across-chat.html)

Google has announced that developers can now build Google Chat apps using the Workspace add-on framework, which is generally available after previously being in preview. This framework allows developers to create a single app that works across multiple Workspace applications, including Gmail, Calendar, Drive, and Chat, simplifying development and enhancing user experience. Chat add-ons enable features like link previews, task automation, alerts from external services, and integration of third-party data with Workspace apps. Notable partners like Lucidchart have already updated their add-ons to support Chat, with others such as Asana, Figma, and ServiceNow planning releases soon. Developers can get started via comprehensive documentation, Quickstart Guides, and tutorial videos, while admins can manage app installation for users, who can also find and install apps from the Workspace Marketplace. The feature is available now to all Google Workspace users, Workspace Individual Subscribers, and personal Google accounts, with resources provided for developers, admins, and end users.

### 30 Jul 2025 – Train multiple models for AI classification for Google Drive on demand 
[Read more](http://workspaceupdates.googleblog.com/2025/07/google-drive-ai-classification-updates-multi-model-support-on-demand-model-training.html)

Google Drive is enhancing its AI data classification capabilities by introducing multi-model support, on-demand training, and a refreshed user interface to improve efficiency for Workspace Admins. Users can now train up to five custom AI models for varied labeling needs, initiate training whenever needed rather than relying on a preset schedule, and benefit from a redesigned UI offering detailed insights into model status, training data metrics, and version history. These updates help organizations automate consistent data labeling at scale, supporting data loss prevention, lifecycle management, and audit controls. The features are rolling out starting July 30th for eligible Google Workspace tiers and are accessible through the Admin console’s Label Manager.

### 30 Jul 2025 – Introducing Video Overviews and upgrades to the Studio panel in NotebookLM
[Read more](http://workspaceupdates.googleblog.com/2025/07/video-overviews-studio-panel-updates-notebooklm.html)

NotebookLM now enables users aged 18 and over to transform documents, slides, and charts into engaging AI-narrated Video Overviews—visual walkthroughs that incorporate images, diagrams, quotes, and data from the source material, customizable by topic, learning goals, and audience. Building on last year’s Audio Overviews, users can create multiple Audio Overviews per notebook (including multilingual versions or topic-specific segments) and generate shareable links for Audio and Video Overviews, accessible only within their domain. Video Overviews currently roll out in English, with more languages coming soon, and are available to Workspace customers with NotebookLM access. Admins have no control over this feature; users can find more information in the Help Center. The full rollout aims for 100% completion by the week of August 4, 2025.

### 29 Jul 2025 – Audit log changes for select Google Meet hardware settings
[Read more](http://workspaceupdates.googleblog.com/2025/07/audit-log-changes-for-select-google.html)

Starting August 7, 2025, audit logs for certain Google Meet hardware settings—specifically device settings like release channel, display power saving, home screen, call phones, and alert recipients—will move from being logged under Event > Chromebox for meetings device setting change to Event > Change/Create/Delete Application Setting as part of updates removing outdated product references. During a transition period until August 28, 2025, events may appear under both categories, after which Chromebox logs will cease for these settings. This change will roll out gradually over 15 days to all Google Workspace customers with Meet hardware devices, requiring no action from admins or end users.

### 29 Jul 2025 – Increased limits to Gemini 2.5 Pro for Gemini for Education users, free of charge
[Read more](http://workspaceupdates.googleblog.com/2025/07/increased-limits-to-gemini-25-pro-for.html)

Gemini for Education now offers default access to premium AI models, including significantly higher usage limits of Gemini 2.5 Pro compared to free consumer versions, along with enterprise-grade data protection and admin-managed features as part of the Google Workspace service, available free to students and educators of all ages. Powered by the advanced LearnLM model, Gemini 2.5 Pro supports personalized exam preparation, step-by-step topic explanations, brainstorming, writing feedback, text re-leveling, and enhanced student engagement. It is accessible by default in the Gemini app for Google Workspace Education Fundamentals, Standard, and Plus users, with no admin controls required, and further details and support are available via Google Help Center resources.

### 22 Jul 2025 – Thumbnail previews will now show on video progress bar in Google Drive
[Read more](http://workspaceupdates.googleblog.com/2025/07/thumbnail-previews-show-video-progress-google-drive-videos.html)

Starting July 22, 2025, Google Drive users will see thumbnail previews when hovering over the progress bar of newly uploaded videos, enabling quicker navigation to specific video parts and enhancing the viewing experience. This feature requires no admin setup and is accessible by uploading a new video via web or mobile, then hovering over the progress bar on the Drive web interface. The rollout will occur over up to 15 days for Rapid Release domains and 1–3 days for Scheduled Release domains starting August 20, 2025. The update is available to all Google Workspace customers, Individual subscribers, and personal Google account users. More details can be found in the Google Help Center.

### 18 Jul 2025 – Google Workspace Updates Weekly Recap - July 18, 2025
[Read more](http://workspaceupdates.googleblog.com/2025/07/release-notes-07-18-2025.html)

Google Workspace is rolling out several new features and updates, including enhanced enterprise security controls with Gemini to protect data and support compliance, and the expansion of Google AI Ultra for Business to 75+ additional countries, offering advanced AI tools like the Gemini app and NotebookLM. The new Productivity Planner Gem integrates Gmail, Calendar, and Drive to help users prioritize tasks, available to select Workspace tiers. The Google Cloud Community forum will move to Discourse in July 2025, improving the administrator support experience. Recent announcements include general availability of SharePoint Online file migration to Google Drive, sharing Google Calendar booking pages via Gmail, Gemini-enabled document interactions on iOS, and AI-powered data extraction in AppSheet. Several features, such as audio leveling in Google Vids, multi-party admin controls, and expanded Gemini functionality across Workspace apps, have completed rollout across Rapid and Scheduled Release domains, enhancing productivity, collaboration, and security for all users.

### 16 Jul 2025 – Now generally available: extract and categorize data in AppSheet with the power of Gemini
[Read more](http://workspaceupdates.googleblog.com/2025/07/appsheet-extract-and-categorize-with-gemini-generally-available.html)

AppSheet Enterprise Plus users can now integrate the new AI Task powered by Gemini directly into their existing automations to automatically extract key details from photos, parse complex PDFs, and categorize, route, and prioritize requests by content. This feature, including the “Extract” and “Categorize” functions, is generally available and supports more column types such as REF, as well as unstructured text data. An AI Task Step Testing tool enables quick testing of workflow steps, with usage counting toward automation limits and credits, which admins can monitor via the AppSheet admin console. Admins can also set governance policies to manage AI Task usage. The update is immediately available for Google Workspace customers with AppSheet Enterprise Plus, with detailed guidance and resources provided in the AppSheet Help Center.

### 16 Jul 2025 – Use Gemini in Google Docs on iOS devices in 20+ languages
[Read more](http://workspaceupdates.googleblog.com/2025/07/use-gemini-in-google-docs-on-ios-devices.html)

Google is bringing Gemini’s AI capabilities to Google Docs on iOS devices, enabling users to better understand, summarize, and query documents on the go in over 20 languages. Available to Google Workspace business plan users on iOS 16+ phones and tablets, Gemini allows generating summaries, asking detailed questions, and drafting content without switching apps. While some features like "Help me write" and image generation aren’t yet available on mobile, users can access Gemini via the spark icon in Docs. The rollout begins July 16, 2025 for Rapid Release domains and August 18, 2025 for Scheduled Release domains. This feature is supported in Business Standard and Plus, Enterprise Standard and Plus, and select Gemini add-on plans, with some add-ons being phased out starting January 2025.


 This is the body text from this

