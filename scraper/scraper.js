const puppeteer = require('puppeteer');
const fs = require('fs');

/*
Used this to guide my stuff
https://blog.bitsrc.io/web-scraping-with-puppeteer-e73e5fee7474
*/

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://80000hours.org/job-board/');
    await page.waitForSelector("div#wrap-top-problems-job-list div.panel-vacancy__logo.wrap-org-logo img");


    /**
     * Setting up selectors...
     * 
     * Unfortunately, these can't actually be used in the page.evaluate
     * method, since that's running in a Chromium browser that doesn't have
     * access to the outer variable environment in my script.
     * 
     * I'll still keep these as a reference.
     * 
     */
    const BUTTON_SELECTOR = 'button#show-more-top-problems-list';
    const PANEL_SELECTOR = 'div.panel.panel-vacancy';
    const HIGH_IMPACT_SELECTOR = 'div#wrap-top-problems-job-list'
    const IMAGE_SELECTOR = 'div.panel-vacancy__logo.wrap-org-logo img';
    const JOB_NAME_SELECTOR = 'h5.panel-vacancy__title';
    const ORG_NAME_SELECTOR = 'div.panel-vacancy__summary';
    const JOB_DESCRIPTION_SELECTOR = 'div.panel-vacancy__job-description p:not(:last-child)';
    const ORG_DESCRIPTION_SELECTOR = 'div.panel-vacancy__org-description div:first-child';

    await page.click(BUTTON_SELECTOR);
    // Now all high-impact jobs should be available

    const data = await page.evaluate(() => {
      const imageList = document.querySelectorAll('div#wrap-top-problems-job-list div.panel-vacancy__logo.wrap-org-logo img');
      const jobNameList = document.querySelectorAll('div#wrap-top-problems-job-list h5.panel-vacancy__title');
      const orgNameList = document.querySelectorAll('div#wrap-top-problems-job-list div.panel-vacancy__summary');
      const jobDescriptionList = document.querySelectorAll('div#wrap-top-problems-job-list div.panel-vacancy__job-description p:first-child'); //not(:last-child)
      const orgDescriptionList = document.querySelectorAll('div#wrap-top-problems-job-list div.panel-vacancy__org-description div:first-of-type');

      const jobArray = [];

      for (let i = 0; i < imageList.length; i++) {
        jobArray[i] = {
          image: imageList[i].getAttribute("src"),
          jobName: jobNameList[i].innerText.trim(),
          orgName: orgNameList[i].innerText.trim(),
          jobDescription: jobDescriptionList[i].innerText.trim(),
          orgDescription: orgDescriptionList[i].innerText.trim()
        }
      }

      return jobArray;

    });
    console.log(data);
    await browser.close();

    // Write the data to a JSON file
    fs.writeFile("jobs.json", JSON.stringify(data), err => {
      if (err) {
        throw err;
      }
      console.log("SAVED!");
    })
  } catch (err) {
    console.log(Error(err));
    await browser.close()
    console.log(Error("Browser closed"));
  }
})();
