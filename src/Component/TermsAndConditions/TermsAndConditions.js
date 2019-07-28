import React from "react"
import AppBar from "../AppBar/Appbar"
import Footer from "../Footer/Footer"
import "./TermsAndConditions.css"

function TermsAndConditions() {
    let restrictedActivities = ["impersonate any person or entity", "stalk, threaten, or otherwise harass any person (including other Users making simultaneous use of the Service), or carry any weapons", "violate any law, statute, rule, permit, ordinance or regulation", "interfere with or disrupt the Services or the E-Tender Platform or the servers or networks connected to the E-Tender Platform", "post information or interact on the E-Tender Platform or with respect to Services in a manner which is false, inaccurate, misleading (directly or by omission or failure to update information), defamatory, libelous, abusive, obscene, profane, offensive, sexually oriented, threatening, harassing, or illegal",
        "use narcotics or alcohol", "use the E-Tender Platform in any way that infringes any third party’s rights, including but not limited to: intellectual property rights, copyright, patent, trademark, trade secret or other proprietary rights or rights of publicity or privacy", "post, email or otherwise transmit any malicious code, files or programs designed to interrupt, damage, destroy or limit the functionality of any computer software or hardware or telecommunications equipment or surreptitiously intercept or expropriate any system, data or personal information", "forge headers or otherwise manipulate identifiers in order to disguise the origin of any information transmitted through the E-Tender Platform",
        "“frame” or “mirror” any part of the E-Tender Platform, without our prior written authorization or use meta tags or code or other devices containing any reference to us in order to direct any person to any other web site for any purpose ", "modify, adapt, translate, reverse engineer, decipher, decompile or otherwise disassemble any portion of the E-Tender Platform or any software used on or for the E-Tender Platform", "rent, lease, lend, sell, redistribute, license or sublicense the E-Tender Platform or access to any portion of the E-Tender Platform", "use any robot, spider, site search/retrieval application, or other manual or automatic device or process to retrieve, index, scrape, “data mine”, or in any way reproduce or circumvent the navigational structure or presentation of the E-Tender Platform or its contents",
        "link directly or indirectly to any other web sites", "transfer or sell your User account, password and/or identification to any other party", "discriminate against or harass anyone on the basis of race, national origin, religion, gender, gender identity, physical or mental disability, medical condition, marital status, age or sexual orientation", "cause any third party to engage in the restricted activities above.  In the event that you undertake in any of the above while participating in Services, E-Tender shall be permitted to refuse to provide you Services or, if such Services have commenced, E-Tender shall be permitted to refuse to continue to provide you Services."
    ]
    return (
        <div>
            <div>
                <AppBar />
            </div>
            <div className="TermsAndConditionsContainer">
                <div className="TermsAndConditionsheading">
                    <h1>Terms of Service</h1>
                </div>
                <div className="contentdiv">
                    <h3 className="ulHeading">
                        <ul className="ul">
                            <li className="li">Contractual Relationship</li>
                        </ul>
                    </h3>
                    <p className="paragraph">
                        These terms of service constitute a legally binding agreement (the “Agreement”) between you and E-Tender, a company with its registered office in U.A.E. under Yousuf Group and or it’s affiliates, (“E-Tender”, “we”, “us” or “our”), by which expression includes our legal representatives, administrators, successors-in-interest, permitted assigns and affiliates (“Affiliates”).
                    </p>
                    <p className="paragraph">
                        This Agreement governs your use of the E-Tender application, website, call-center and technology platform (collectively, the “E-Tender Platform”). In many jurisdictions, the right to operate the E-Tender Platform is licensed by E-Tender Inc. to its relevant Affiliates, and the relevant Affiliate in your jurisdiction provides you the right to access and use the E-Tender Platform in your jurisdiction.  Where no Affiliate exists in your jurisdiction but use of the E-Tender Platform is available to you, the right to access and use the E-Tender Platform will be provided to you by our Affiliate in the United Arab Emirates, E-Tender.
                    </p>
                    <p className="paragraph" style={{ fontWeight: 600 }}>
                        PLEASE READ THIS AGREEMENT CAREFULLY BEFORE ACCESSING OR USING THE E-TENDER PLATFORM. IF YOU DO NOT AGREE TO BE BOUND BY THE TERMS AND CONDITIONS OF THIS AGREEMENT, YOU MAY NOT USE OR ACCESS THE E-TENDER PLATFORM.
                    </p>
                    <p className="paragraph">
                        Your access and use of the E-Tender Platform constitutes your agreement to be bound by this Agreement, which establishes a contractual relationship between you and E-Tender. E-Tender may immediately terminate this Agreement with respect to you, or generally cease offering or deny access to the E-Tender Platform or any portion thereof, at any time for any reason without notice.
                    </p>
                    <p className="paragraph">
                        E-Tender may amend this Agreement from time to time. Amendments will be effective upon E-Tender’s posting of an updated Agreement at this location or the amended policies or supplemental terms on the applicable Service. Your continued access or use of the E-Tender Platform after such posting constitutes your consent to be bound by this Agreement, as amended.
                    </p>
                    <p className="paragraph">
                        Our collection and use of personal information in connection with the E-Tender Platform is as provided in E-Tender’s Privacy Policy located at <a href="https://www.ETender.com" target="blank">https://www.ETender.com</a> or <a href="http://www.yousufgroup.com/" target="blank">yousufgroup.com</a>. E-Tender may provide to a claims processor or an insurer any necessary information (including your contact information) if there is a complaint, dispute or conflict, which may include an accident, involving you and a third party provider and such information or data is necessary to resolve the complaint, dispute or conflict.
                    </p>
                    <h4 className="ulHeading">The E-Tender Platform:</h4>
                    <p className="paragraph">
                        Materials posted on the E-Tender Platform are not intended to amount to advice on which reliance should be placed. We therefore disclaim all liability and responsibility arising from any reliance placed on such materials by any visitor to the E-Tender Platform, or by anyone who may be informed of any of its contents.
                    </p>
                    <p className="paragraph">
                        We aim to update the E-Tender Platform regularly, and may change the content at any time. If the need arises, we may suspend access to the E-Tender Platform and the Services, or close them indefinitely. Any of the material on the E-Tender Platform or the Services may be out of date at any given time, and we are under no obligation to update such material.
                    </p>
                    <p className="paragraph">
                        YOU ACKNOWLEDGE THAT NEITHER E-TENDER NOR ITS AFFILIATES PROVIDE MATERIALS SUPPLY, ENGINEERING SUPERVISION OR ASSESSMENT, PROJECT MANAGEMENT, PROJECT FINANCING, INSTALLATION, NOC, GOODS OR LOGISTICS SERVICES OR FUNCTION AS A DIRECT OWNER, DEVELOPER, CONSULTANT OR CONTRACTOR, AND THAT ALL SUCH SERVICES ARE PROVIDED BY INDEPENDENT THIRD PARTY CONSULTANTS AND CONTRACTORS WHO ARE NOT EMPLOYED BY E-TENDER OR ANY OF ITS AFFILIATES.
                    </p>
                    <h4 className="ulHeading">Third Party Services and Content:</h4>
                    <p className="paragraph">
                        The E-Tender Platform may be made available or accessed in connection with third party services and content (including advertising) that E-Tender does not control. You acknowledge that different terms of use and privacy policies may apply to your use of such third party services and content. E-Tender does not endorse such third party services and content and in no event shall E-Tender be responsible or liable for any products or services of such third party providers. Additionally, Apple Inc., Google, Inc., and/or their applicable international subsidiaries and affiliates will be third-party beneficiaries to this contract if you access the E-Tender Platform using applications developed for Apple iOS or Android-powered mobile devices, respectively. These third party beneficiaries are not parties to this contract and are not responsible for the provision or support of the E-Tender Platform in any manner. Your access to the E-Tender Platform using these services or applications is subject to terms set forth in the applicable third party beneficiary’s terms of service.
                    </p>
                    <h4 className="ulHeading">E-Tender Platform Ownership:</h4>
                    <p className="paragraph">
                        The E-Tender Platform and all rights therein are and shall remain E-Tender’s property or the property of E-Tender’s licensors. Neither this Agreement nor your use of the E-Tender Platform convey or grant to you any rights: (i) in or related to the E-Tender Platform except for the limited license granted above; or (ii) to use or reference in any manner E-Tender’s company names, logos, product and service names, trademarks or services marks or those of E-Tender’s licensors.
                    </p>
                    <h4 className="ulHeading">Provision of the Services:</h4>
                    <p className="paragraph">
                        You acknowledge that portions of the Services may be made available under E-Tender’s various brands or request options.
                    </p>
                    <p className="paragraph">
                        You also acknowledge that the Services may be made available under such brands or request options by or in connection with: (i) certain Affiliates; or (ii) independent third party contractors.
                    </p>
                    <p className="paragraph">
                        It is at E-Tender’s discretion which brands or request options are made available to you.
                    </p>
                    <p className="paragraph">
                        Use of E-Tender Platform
                    </p>
                    <h4 className="ulHeading">User Accounts:</h4>
                    <p className="paragraph">
                        In order to use most aspects of the E-Tender Platform, you must register for and maintain an active personal User account (“Account”). You must be at least 18 years of age to obtain an Account. Account registration requires you to submit to E-Tender certain personal information, such as your name, address, mobile phone number, gender and age. You agree to maintain accurate, complete, and up-to-date information in your Account. Your failure to maintain accurate, complete, and up-to-date Account information may result in your inability to access and use the E-Tender Platform, including your ability to request access to your personal information or to opt in or out of marketing preferences, or E-Tender’s termination of this Agreement with you.
                    </p>
                    <p className="paragraph">
                        You agree to maintain the security and secrecy of your Account username and password at all times.  You agree and understand that you are responsible for all activity that occurs under your Account, even as a result of loss, damage or theft of the device through which you access the E-Tender Platform.
                    </p>
                    <p className="paragraph">
                        Unless otherwise permitted by E-Tender in writing, you may only possess one Account.
                    </p>
                    <h4 className="ulHeading">User Requirements and Conduct:</h4>
                    <p className="paragraph">
                        The E-Tender Platform is not available for use by persons under the age of 18 and may only be used by individuals who can form legally binding contracts under applicable law. You may not authorize third parties to use your Account, and you may not allow persons under the age of 18 to receive services. You may not assign or otherwise transfer your Account to any other person or entity. You agree to comply with all applicable laws when using the E-Tender Platform, and you may only use the E-Tender Platform for lawful purposes. You will not, in your use of the E-Tender Platform, cause nuisance, annoyance, inconvenience, or property damage, other third party provider or any other party. In certain instances, you may be asked to provide proof of identity to access or use the E-Tender Platform, and you agree that you may be denied access to or use of the E-Tender Platform if you refuse to provide proof of identity. Failure to comply with the terms of this section or of section 5 may result in our taking certain actions against you, including but not limited to: (i) immediate, temporary or permanent withdrawal of your right to use the E-Tender Platform (ii) legal action against you including proceedings for reimbursement of all costs on an (including, but not limited to, reasonable administrative and legal costs) resulting from the breach (iii) disclosure of such information to law enforcement authorities as we feel is necessary and/or (iv) immediate, temporary or permanent removal of any posting or material uploaded by you to our Service.
                    </p>
                    <h3 className="ulHeading">
                        <ul className="ul">
                            <li className="li">Charges and Payments</li>
                        </ul>
                    </h3>
                    <p className="paragraph">
                        As a User, you agree to pay any amounts charged by E-Tender (the “E-Tender Fee”) (if applicable in your jurisdiction) and amounts charged by us for providing Services to you (“Charges”).
                    </p>
                    <p className="paragraph">
                        After you have received Services, E-Tender: (i) may facilitate your payment of the applicable Charges and (ii) may collect any applicable E-Tender Fee directly from you or, in the case of a cash payment. Payment of the Charges and E-Tender Fee in the above manner shall in all cases be considered the same as payment made directly by you to the Us or to E-Tender, as applicable. Charges and E-Tender Fees will be inclusive of applicable taxes where required by law, including any VAT or sales tax. Any charges, commission, E-Tender Fees, transaction charges,  third-party charges paid by you are final and non-refundable and zero charge-backs are allowed, unless otherwise determined by E-Tender.
                    </p>
                    <p className="paragraph">
                        E-Tender is not liable for validating the accuracy of the information of tenders and proposals posted on E-Tender via any users or customers or bidders. It is the sole responsibility of the users to post accurate information for the tender and proposal.
                    </p>
                    <p className="paragraph">
                        E-Tender is not responsible for any user for any sort of non-authorized transaction. Hence, users should ensure confidentiality of their user details to avoid any sort of identity theft/cyber-attack.
                    </p>
                    <p className="paragraph">
                        E-Tender does not allow any sort of claim for Item Not Received or Item Significantly Not as Described.                     </p>
                    <p className="paragraph">
                        Any sort of tender cancellation, hold, or unassigned will be applied for E-Tender Service charges/commission. Any sort of delay would affect the user rating, and / or probably be penalized by E-Tender via suspension of User Account. E-Tender may track the project, customer and the bidder for any offline contact done between the parties outside the platform to avoid the services / commission charges for E-Tender. On identifying such cases, could lead to legal actions on both the customer and the bidder from E-Tender
                    </p>
                    <p className="paragraph">
                        E-Tender and or its affiliates holds’ the right to suspend any user account at any time without notice
                    </p>
                    <p className="paragraph">
                        E-Tender and or its affiliates holds’ the right to change the Terms & Conditions at any time without notice. It’s the responsibility of the user to keep track of the changes.
                    </p>
                    <p className="paragraph">
                        All Charges and E-Tender Fees are due immediately and payment will be facilitated by E-Tender using the preferred payment method designated in your Account, after which E-Tender or a Us, as applicable, will send you a receipt by email. If your primary Account payment method is determined to be expired, invalid or otherwise not able to be charged, you agree that E-Tender may, on its own behalf, use a secondary payment method in your Account, if available.
                    </p>
                    <p className="paragraph">
                        As between you and E-Tender, E-Tender reserves the right to establish, remove and/or revise E-Tender Fees at any time in E-Tender’s sole discretion. Charges may also be varied or revised at any time without your consent. Further, you acknowledge and agree that Charges and E-Tender Fees applicable in certain geographical areas may increase substantially during times of high demand. E-Tender will use reasonable efforts to inform you of Charges and E-Tender Fees that may apply, provided that you will be responsible for Charges and E-Tender Fees incurred under your Account regardless of your awareness of such Charges or E-Tender Fees, as applicable, or the amounts thereof.
                    </p>
                    <h3 className="ulHeading">
                        <ul className="ul">
                            <li className="li">Restricted Activities</li>
                        </ul>
                    </h3>
                    <p className="paragraph">
                        With respect to your use of the E-Tender Platform and your participation in the Services, you agree that you will not
                    </p>
                    <ol style={{ listStyleType: "lower-roman" }}>
                        {restrictedActivities.map((e) => <li className="listing">{e}</li>)}
                    </ol>
                    <p className="paragraph">
                        <ul className="ul">
                            <li className="li">Disclaimers; Limitation of Liability; Indemnity</li>
                        </ul>
                    </p>
                    <h3>DISCLAIMER.</h3>
                    <p className="paragraph">
                        THE E-TENDER PLATFORM AND SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” E-TENDER DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES, EXPRESS, IMPLIED OR STATUTORY, NOT EXPRESSLY SET OUT IN THIS AGREEMENT, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN ADDITION, E-TENDER MAKES NO REPRESENTATION, WARRANTY, OR GUARANTEE REGARDING THE RELIABILITY, TIMELINESS, QUALITY, SUITABILITY OR AVAILABILITY OF THE E-TENDER PLATFORM, SERVICES OR ANY OTHER SERVICES REQUESTED THROUGH THE USE OF THE E-TENDER PLATFORM, OR THAT THE E-TENDER PLATFORM WILL BE UNINTERRUPTED OR ERROR-FREE. E-TENDER AND ITS AFFILIATES DO NOT GUARANTEE THE QUALITY, SUITABILITY, SAFETY OR ABILITY OF USS. YOU AGREE THAT THE ENTIRE RISK ARISING OUT OF YOUR USE OF THE E-TENDER PLATFORM AND SERVICES, AND ANY SERVICE REQUESTED IN CONNECTION THEREWITH, REMAINS SOLELY WITH YOU, TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW.
                    </p>
                    <p className="paragraph">
                        E-Tender and its Affiliates are not responsible for the conduct, whether online or offline, of any Customers and Suppliers or any other third party. You are encouraged to use a reasonable degree of sensibility and caution when interacting with others.
                    </p>
                    <p className="paragraph">
                        We are not required to procure insurance for, nor are we responsible for projects profit and loss, any sort of damage, risk, and safety.
                    </p>
                    <p className="paragraph">
                        E-Tender and its Affiliates are not responsible for the conduct, whether online or offline, of any Customers and Suppliers or any other third party. You are encouraged to use a reasonable degree of sensibility and caution when interacting with others.
                    </p>
                    <p className="paragraph">
                        By using the E-Tender Platform and participating in the Services, you agree to accept such risks and agree that E-Tender is not responsible for the acts or omissions of Users, Suppliers, or any other third party.
                    </p>
                    <p className="paragraph">
                        E-Tender and its Affiliates expressly disclaim any liability arising from the unauthorized use of your User account. Should you suspect that any unauthorized party may be using your User account or you suspect any other breach of security, you agree to notify us immediately.
                    </p>
                    <p className="paragraph">
                        Location data provided by the E-Tender Platform is for basic location purposes only and is not intended to be relied upon in situations where precise location information is needed or where erroneous, inaccurate or incomplete location data may lead to death, personal injury, property or environmental damage. Neither E-Tender, nor its Affiliates nor any of its content providers, guarantees the availability, accuracy, completeness, reliability, or timeliness of location data tracked or displayed by the E-Tender Platform. Any of your information, including geolocational data, you upload, provide, or post on the E-Tender Platform may be accessible to E-Tender.
                    </p>
                    <h3>LIMITATION OF LIABILITY.</h3>
                    <p className="paragraph">
                        E-TENDER AND ITS AFFILIATES AND ITS PARTNERS SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOST DATA, PERSONAL INJURY OR PROPERTY DAMAGE RELATED TO, IN CONNECTION WITH, OR OTHERWISE RESULTING FROM ANY USE OF THE E-TENDER PLATFORM OR SERVICES, EVEN IF E-TENDER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. E-TENDER AND ITS AFFILIATES AND ITS PARTNERS SHALL NOT BE LIABLE FOR ANY DAMAGES, LIABILITY OR LOSSES ARISING OUT OF: (i) YOUR USE OF OR RELIANCE ON THE E-TENDER PLATFORM OR THE SERVICES OR YOUR INABILITY TO ACCESS OR USE THE E-TENDER PLATFORM OR THE SERVICES; OR (ii) ANY TRANSACTION OR RELATIONSHIP BETWEEN YOU AND ANY US OR OTHER THIRD PARTY PROVIDER, EVEN IF E-TENDER OR ITS AFFILIATES OR ITS PARTNERS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. E-TENDER AND ITS AFFILIATES AND ITS PARTNERS SHALL NOT BE LIABLE FOR DELAY OR FAILURE IN PERFORMANCE RESULTING FROM CAUSES BEYOND OUR REASONABLE CONTROL. YOU ACKNOWLEDGE THAT USS PROVIDING TRANSPORTATION SERVICES REQUESTED THROUGH SOME REQUEST BRANDS MAY OFFER RIDESHARING OR PEER-TO-PEER TRANSPORTATION SERVICES AND MAY NOT BE PROFESSIONALLY LICENSED OR PERMITTED. IN NO EVENT SHALL E-TENDER’S AND/OR AN AFFILIATE’S AND/OR A PARTNER’S TOTAL LIABILITY TO YOU IN CONNECTION WITH THE E-TENDER PLATFORM, THE SERVICES, ANY WEBSITE OR APPLICATION LINKED THERETO, ANY MATERIAL POSTED ON THE FOREGOING OR ACTS OR OMISSIONS OF RESTAURANT PARTNERS OR OTHER PARTNERS FOR ALL DAMAGES, LOSSES AND CAUSES OF ACTION EXCEED TWO THOUSAND UNITED STATES DOLLARS OR EQUIVALENT AMOUNT IN ANOTHER CURRENCY.
                    </p>
                    <p className="paragraph">
                        THE E-TENDER PLATFORM MAY BE USED BY YOU TO TENDER BUT YOU AGREE THAT E-TENDER, ITS AFFILIATES, AND OTHER PARTNERS HAVE NO RESPONSIBILITY OR LIABILITY TO YOU RELATED TO ANY SERVICE PROVIDED TO YOU AND OTHER THAN AS EXPRESSLY SET FORTH IN THIS AGREEMENT. THE LIMITATIONS AND DISCLAIMER IN THIS SECTION 6 DO NOT PURPORT TO LIMIT LIABILITY OR ALTER YOUR RIGHTS AS A CONSUMER THAT CANNOT BE EXCLUDED UNDER APPLICABLE LAW.
                    </p>
                    <h3>Indemnity.</h3>
                    <p className="paragraph">
                        You agree to indemnify and hold E-Tender, its Affiliates, and other partners and their officers, directors, employees and agents harmless from any and all claims, demands, losses, liabilities, and expenses (including attorneys’ fees) arising out of or in connection with: <br />(i) your use of the E-Tender Platform and the Services or services or goods obtained through your use of the E-Tender Platform; <br />(ii) your breach or violation of this Agreement <br />(iii) your violation of the
                    </p>
                    <p className="paragraph">
                        Dispute Resolution
                    </p>
                    <h3>Arbitration.</h3>
                    <p className="paragraph">
                        You agree that any dispute, claim or controversy arising out of or relating to this Agreement or the breach, termination, enforcement, interpretation or validity thereof or the use of the E-Tender Platform or Services (collectively, "Disputes") will be settled by binding arbitration between you and any relevant Affiliate in your jurisdiction, or between you and E-Tender if no other Affiliate is incorporated in your jurisdiction, except that each party retains the right  to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a party's copyrights, trademarks, trade secrets, patents or other intellectual property rights. You acknowledge and agree that you and E-Tender are each waiving the right to a trial by jury or to participate as a plaintiff or class in any purported class action or representative proceeding. Further, unless both you and the relevant Affiliate otherwise agree in writing, the arbitrator may not consolidate more than one person's claims, and may not otherwise preside over any form of any class or representative proceeding. If this specific paragraph is held unenforceable, then the entirety of this "Dispute Resolution" section will be deemed void. Except as provided in the preceding sentence, this "Dispute Resolution" section will survive any termination of this Agreement.  This “Dispute Resolution” section applies to all Disputes (as defined below) between you and E-Tender and/or any of its Affiliates.
                    </p>
                    <p className="paragraph">
                        Arbitration Process and Rules.
                    </p>
                    <p className="paragraph">
                        Any dispute, conflict, claim or controversy arising out of or broadly in connection with or relating to the E-Tender Platform or this Agreement, including those relating to its validity, its construction or its enforceability (any “Dispute”) shall be first mandatorily submitted to mediation proceedings under the International Chamber of Commerce Mediation Rules (“ICC Mediation Rules”). If such Dispute has not been settled within sixty (60) days after a request for mediation has been submitted under such ICC Mediation Rules, such Dispute can be referred to and shall be exclusively and finally resolved by arbitration under the Rules of Arbitration of the International Chamber of Commerce (“ICC Arbitration Rules”). The ICC Rules' Emergency Arbitrator provisions are excluded. The Dispute shall be resolved by one (1) arbitrator to be appointed in accordance with the ICC Rules. The place of both mediation and arbitration shall be in the city in which the applicable Affiliate with which you have a Dispute has its registered office. The language of the mediation and/or arbitration shall be English, unless you do not speak English, in which case the mediation and/or arbitration shall be conducted in both English and your native language. The existence and content of the mediation and arbitration proceedings, including documents and briefs submitted by the parties, correspondence from and to the International Chamber of Commerce, correspondence from the mediator, and correspondence, orders and awards issued by the sole arbitrator, shall remain strictly confidential and shall not be disclosed to any third party without the express written consent from the other party unless: <br />(i) the disclosure to the third party is reasonably required in the context of conducting the mediation or arbitration proceedings; and <br />(ii) the third party agrees unconditionally in writing to be bound by the confidentiality obligation stipulated herein.
                    </p>
                    <h3>Other Provisions</h3>
                    <h4>Choice of Law.</h4>
                    <p className="paragraph">
                        This Agreement is governed by and construed in accordance with the laws of the jurisdiction in which the relevant Affiliate is incorporated, without giving effect to any conflict of law principles, except as may be otherwise provided in supplemental terms applicable to your region.
                    </p>
                    <h3>Notice</h3>
                    <p className="paragraph">
                        E-Tender may give notice by means of a general notice on the E-Tender Platform, electronic mail to your email address in your Account, or by written communication sent to your address as set forth in your Account. You may give notice to E-Tender by written communication to E-Tender's email address at admin@etender.com.
                    </p>
                    <h3>General</h3>
                    <p className="paragraph">
                        You may not assign or transfer your rights under this Agreement in whole or in part without E-Tender’s prior written approval. You give your approval to E-Tender for it to assign or transfer its rights and obligations under this Agreement in whole or in part, including to: <br />(i) a subsidiary or affiliate; <br />(ii) an acquirer of E-Tender’s equity, business or assets; or <br />(iii) a successor by merger. No joint venture, partnership, employment or agency relationship exists between you, E-Tender or as a result of the contract between you and E-Tender or use of the E-Tender Platform.
                    </p>
                    <p className="paragraph">
                        If any provision of this Agreement is held to be illegal, invalid or unenforceable, in whole or in part, under any law, such provision or part thereof shall to that extent be deemed not to form part of this Agreement but the legality, validity and enforceability of the other provisions in this Agreement shall not be affected. In that event, the parties shall replace the illegal, invalid or unenforceable provision or part thereof with a provision or part thereof that is legal, valid and enforceable and that has, to the greatest extent possible, a similar effect as the illegal, invalid or unenforceable provision or part thereof, given the contents and purpose of this Agreement. This Agreement constitutes the entire agreement and understanding of the parties with respect to its subject matter and replaces and supersedes all prior or contemporaneous agreements or undertakings regarding such subject matter.
                    </p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default TermsAndConditions