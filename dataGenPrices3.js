const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();

const dataGenerator = () => {
  writer.pipe(fs.createWriteStream('PricesData3.csv'));
  

  const adjsOne = ['Simplified', 'Integrated','Blockchain', 'Investment', 'Quantum', 'Adorable', 'Alert', 'Alluring', 'Ambitious', 'Amusing', 'Boundless', 'Brave', 'Bright', 'Calm', "Capable", "Charming", "Cheerful", "Coherent", "Confident", "Cooperative", "Courageous", "Credible", "Cultured", "Dashing", "Dazzling", "Debonair", "Decisive", "Delightful", "Determined", "Diligent", "Discreet", "Dynamic", "Eager", "Efficient", "Enchanting", "Encouraging", "Enduring", "Energetic", "Entertaining", "Enthusiastic", "Excellent", "Exuberant", "Fabulous", "Faithful", "Fantastic", "Fearless", "Friendly", "Generous", "Gentle", "Happy", "Harmonious", "Hilarious", "Honorable", "Impartial", "Industrious", "Instinctive", "Jolly", "Joyous", "Kind", "Kind-hearted", "Knowledgeable", "Likable", "Lovely", "Loving", "Lucky", "Mature", "Modern", "Obedient", "Painstaking", "Peaceful", "Perfect", "Plausible", "Pleasant", "Productive", "Protective", "Proud", "Punctual", "Quiet", "Receptive", "Reflective", "Relieved", "Resolute", "Responsible", "Righteous", "Romantic", "Sedate", "Selective", "Sensitive", "Shrewd", "Silly", "Sincere", "Skillful", "Splendid", "Stimulating", "Talented", "Thrifty", "Tough", "Trustworthy", "Unbiased", "Upbeat"];
  const adjsTwo = ["Abrasive", "Abrupt", "Abusive", "Aloof", "Ambiguous", "Angry", "Annoyed", "Anxious", "Arrogant", "Awful", "Bad", "Belligerent", "Boorish", "Boring", "Callous", "Careless", "Clumsy", "Combative", "Confused", "Cowardly", "Crazy", "Creepy", "Cruel", "Cynical", "Dangerous", "Deceitful", "Defective", "Defiant", "Depressed", "Deranged", "Disagreeable", "Disillusioned", "Disturbed", "Domineering", "Draconian", "Embarrassing", "Envious", "Erratic", "Evasive", "Evil", "Fanatical", "Fierce", "Finicky", "Flashy", "Flippant", "Foolish", "Forgetful", "Frantic", "Fretful", "Frightened", "Furtive", "Greedy", "Grieving", "Grouchy", "Gruesome", "Grumpy", "Guarded", "Gullible", "Helpless", "Hesitant", "Horrible", "Hurtful", "Ignorant", "Irresolute", "Jealous", "Jittery", "Lacking", "Lazy", "Lonely", "Malicious", "Materialistic", "Mean", "Mysterious", "Naive", "Nasty", "Naughty", "Nervous", "Noisy", "Obnoxious", "Outrageous", "Over", "Zealous", "Panicky", "Pathetic", "Possessive", "Quarrelsome", "Repulsive", "Ruthless", "Sad", "Scary", "Secretive", "Selfish", "Silly", "Slow", "Sneaky", "Snobbish", "Spendthrift", "Squeamish", "Stingy", "Strange"];
  const nouns = ["Advantage", "Advertisement", "Advice", "Apology", "Authorization", "Bill", "Brand", "Budget", "Commission", "Comparison", "Competition", "Competitor", "Confirmation", "Costs", "Creditor", "Customer", "Deadline", "Debt", "Debtor", "Decision", "Decrease", "Deficit", "Delivery", "Department", "Description", "Difference", "Disadvantage", "Distribution", "Employee", "Employer", "Enquiry", "Environment", "Equipment", "Estimate", "Experience", "Explanation", "Facilities", "Factory", "Feedback", "Goal", "Goods", "Growth", "Guarantee", "Improvement", "Increase", "Industry", "Instructions", "Interest", "Inventory", "Invoice", "Knowledge", "Limit", "Loss", "Margin", "Market", "Message", "Mistake", "Objective", "Offer", "Opinion", "Option", "Order", "Output", "Payment", "Penalty", "Permission", "Possibility", "Product", "Production", "Profit", "Promotion", "Purchase", "Reduction", "Refund", "Reminder", "Repairs", "Report", "Responsibility", "Result", "Retailer", "Rise", "Risk", "Salary", "Sales", "Schedule", "Share", "Signature", "Stock", "Success", "Suggestion", "Supply", "Support", "Target", "Transport", "Turnover", "Wholesaler", "David", "Ken","Adam","Shayaun Nejad, PhD, MD, DDS, JD"]
  const type = ['Corporation', 'Nonprofit Corporation', 'Trust', 'Association', 'LLP', 'LLLP', 'LLC', 'Limited Partnership', 'General Partnership', 'Sole Proprietorship']
  const adjsOneLength = adjsOne.length;
  const adjsTwoLength = adjsTwo.length;
  const nounsLength = nouns.length;
  const typeLength = type.length;
  for (let i = 0; i < adjsOneLength; i++){
    for(let j = 0; j < adjsTwoLength; j++){
      for (let k = 0; k < nounsLength; k++) {
        for(let l = 0; l < typeLength; l++){

          let prices =[];

          for (let d = 1; d < 31; d++) {
            prices.push(Number(parseFloat(Math.random() * (200 - 120) + 120).toFixed(2)));
          }

          writer.write({
            companyName:`${adjsOne[i]} ${adjsTwo[j]} ${nouns[k]} ${type[l]}`,
            prices: JSON.stringify(prices)
          });

        }
      }
    }
  } 
  
  writer.end()
}

dataGenerator();