
const data = require("../pageobjects/testdata")
import Page from './page'


class RetirementPage extends Page{

    //Page locators
    get currentAge () { return  $('#current-age') }
    get retirementAge () { return $('#retirement-age')}
    get currentIncome () { return $('#current-income')}
    get spouseIncome () { return $('#spouse-income')}
    get totalSavings () { return $('#current-total-savings')}
    get annualSavings () { return $('#current-annual-savings')}
    get rateIncrease () { return $('#savings-increase-rate')}
    get validateToggle () { return $("//div[@class='row social-security-field']")}
    get socialBenefitsBtnYes () { return $("//label[@for='yes-social-benefits']")}
    get socialBenefitsBtnNo () { return $("//label[@for='no-social-benefits']")}
    get maritalStatusNo () { return $("//label[@for='married']")}
    get maritalStatusYes () { return $("//label[@for='single']")}
    get ssnOverrideAmt () { return $('#social-security-override-container')}
    get defaultValues () { return $('=Adjust default values')}
    get additionalIncome () { return $('#additional-income')}
    get retirementDuration () { return $('#retirement-duration')}
    get inflationYes () { return $("//label[@for='include-inflation']")}
    get inflationNo () { return $("//label[@for='exclude-inflation']")}
    get retirementAnnualIncome () { return $('#retirement-annual-income')}
    get preRetirementRoi () { return $('#pre-retirement-roi')}
    get postRetirementRoi () { return $('#post-retirement-roi')}
    get saveChangesBtn () { return $("//button[normalize-space()='Save changes']")}
    get calculateResultsBtn () { return $("//button[normalize-space()='Calculate']")}
    get resultsPage () { return $("//h3[normalize-space()='Results']")}



    open () {
        return super.open('https://www.securian.com/insights-tools/retirement-calculator.html')
    }

}

export default new RetirementPage()