
import RetirementPage from '../pageobjects/retirement.page'
const data = require("../pageobjects/testdata");



describe('Validate securian retirement calculator feature ', () => {
    it('beforeAll', function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
    })

  
    
    it('validate SSN benefits toggle functionality', async () => {
        await RetirementPage.open();
        //when SSN benefits is not selected
        await RetirementPage.socialBenefitsBtnNo.click()
        await expect(RetirementPage.validateToggle).toHaveAttributeContaining('style',data.toggleAttrTxt);
        await expect(RetirementPage.ssnOverrideAmt).not.toBeDisplayed()
        //when SSN benefits is selected
        await RetirementPage.socialBenefitsBtnYes.click()
        await expect(RetirementPage.ssnOverrideAmt).toBeDisplayed()


        
    })

    it('verify if user is able to update default selector values', async () => {
        await RetirementPage.open()
        //when 'Adjust default values' is not clicked
        await expect(RetirementPage.additionalIncome).not.toBeDisplayed()
        //when 'Adjust default values' is clicked
        await RetirementPage.defaultValues.click()
        //verifying if fields are displaying
        await RetirementPage.additionalIncome.waitForDisplayed()
        await expect(RetirementPage.additionalIncome).toBeDisplayed()
        //verifying if user is able to update a field
        await RetirementPage.retirementDuration.waitForDisplayed()
        await RetirementPage.retirementDuration.addValue(data.retirementDuration)
        let value = await RetirementPage.retirementDuration.getValue()
        await expect (value).toEqual(data.retirementDuration)
        
    })


    it('verify form submission',  async () => {

        //filling all the fields
         await RetirementPage.open()
         await browser.setTimeout({ implicit: 10000, pageLoad: 10000, script: 5000 });
         await RetirementPage.currentAge.setValue(data.currentAge)
         await RetirementPage.retirementAge.setValue(data.retirementAge)
         await RetirementPage.currentIncome.setValue(data.currentIncome)
         await RetirementPage.spouseIncome.setValue(data.spouseIncome)
         await RetirementPage.totalSavings.setValue(data.totalSavings)
         await RetirementPage.annualSavings.setValue(data.annualSavings)
         await RetirementPage.rateIncrease.setValue(data.rateIncrease)

        //selecting SSN benefits radio button based on input
         if (data.socialBenefitsInput === 'yes')
            await RetirementPage.socialBenefitsBtnYes.click()
         else if (data.socialBenefitsInput === 'no')
            await RetirementPage.socialBenefitsBtnNo.click()

        //selecting marital status based on input
         if (data.maritalStatus === 'married')
            await RetirementPage.maritalStatusYes.click()
         else if (data.maritalStatus === 'single')
            await RetirementPage.maritalStatusNo.click()

        //filling remaining fields
         await RetirementPage.ssnOverrideAmt.setValue(data.ssnOverrideAmt)
         await RetirementPage.defaultValues.click()
         await RetirementPage.additionalIncome.waitForDisplayed()
         await RetirementPage.additionalIncome.setValue(data.additionalIncome)
         await RetirementPage.retirementDuration.setValue(data.retirementDuration)

        //selecting post retirement radio button based on inflation input 
         if (data.inflationInput === 'yes')
            await RetirementPage.inflationYes.click()
         else if (data.socialBenefitsInput === 'no')
            await RetirementPage.inflationNo.click()

        //filling remaining fields
         await RetirementPage.retirementAnnualIncome.setValue(data.retirementAnnualIncome)
         await RetirementPage.preRetirementRoi.setValue(data.preRetirementRoi)
         await RetirementPage.postRetirementRoi.setValue(data.postRetirementRoi)
         await RetirementPage.saveChangesBtn.click()
         await RetirementPage.calculateResultsBtn.waitForClickable()
         await RetirementPage.calculateResultsBtn.click()
         
         //verifying if results are getting displayed after user submits the form
         await expect(RetirementPage.resultsPage).toBeDisplayed()


    })
    

})