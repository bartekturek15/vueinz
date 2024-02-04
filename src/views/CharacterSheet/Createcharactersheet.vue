 <template>
    <div class="container input-box wid text-center text">
        <form @submit.prevent="createPost">
        <div class="row mb-5 mt-5">        
            <div class="col-3 input-field mt-4">
                <div class="namebox border rounded-start pt-4">
                    <input type="text" class="input me-4 chaname" id="characterName" autocomplete="off" placeholder="Irek" v-model="character.characterName"  @input="updateForm('characterName', $event.target.value)">
                    <div class="text-start ms-4"><label class="namelab" style="color: whitesmoke;" for="characterName">Nazwa postaci</label></div>
                </div>
            </div>
            <div class="col-3 classbox border border-end-0 rounded-start pt-4">
                <div class="d-block input-field">
                    <input type="text" class="input me-2 inp" id="Classn" autocomplete="off" placeholder="Paladyn" v-model="Classn" disabled>
                    

                    <div class="dropdown d-inline me-5 text-start">
                        <button class="btn my-button dropdown-toggle p-0 m-0" type="button" data-bs-toggle="dropdown" data-bs-theme="dark" aria-expanded="false">
                            Klasa
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <div v-for="item in classitems" :key="item.classId">
                                <li class="ms-1" @click="changeClassName(item)">{{ item.className }}</li>
                            </div>
                        </ul>
                        </div>

                </div>
                <div class="d-block input-field mt-2">
                    <input type="text" class="input me-2 inp" id="Racen" autocomplete="off" placeholder="Elf" v-model="Racen" disabled>
                    
                    <div class="dropdown d-inline me-5 text-start">
                        <button class="btn my-button dropdown-toggle p-0 m-0" type="button" data-bs-toggle="dropdown" data-bs-theme="dark" aria-expanded="false">
                            Rasa
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <div v-for="item in raceitems" :key="item.raceId">
                                <li class="ms-1" @click="changeRaceName(item)">{{ item.raceName }}</li>
                            </div>
                        </ul>
                        </div>
                </div>
            </div>
            <div class="col-3 classbox border border-start-0 border-end-0 pt-4">
                <div class="d-block input-field">
                    <input type="text" class="input me-2 inp" id="characterBackground" autocomplete="off" placeholder="Akolita" v-model="character.characterBackground"  @input="updateForm('characterBackground', $event.target.value)">
                    <div class="text-start ms-5"><label style="color: whitesmoke;" for="characterBackground">Przeszłość</label></div>
                </div>
                <div class="d-block input-field mt-2">
                    <input type="text" class="input me-2 inp" id="characterAlignment" autocomplete="off" placeholder="Dobry" v-model="character.characterAlignment"  @input="updateForm('characterAlignment', $event.target.value)">
                    <div class="text-start ms-5"><label style="color: whitesmoke;" for="characterAlignment">Przynależność</label></div>
                </div>
            </div>
            <div class="col-3 classbox border border-start-0 rounded-end pt-4">
                <div class="d-block input-field">
                    <input type="text" class="input me-2 inp" id="characterLevel" autocomplete="off" placeholder="2" v-model="character.characterLevel"  @input="updateForm('characterLevel', $event.target.value)">
                    <div class="text-start ms-5"><label style="color: whitesmoke;" for="characterLevel">Poziom</label></div>
                </div>
                <div class="d-block input-field mt-2">
                    <input type="text" class="input me-2 inp" id="characterExperience" autocomplete="off" placeholder="2300" v-model="character.characterExperience"  @input="updateForm('characterExperience', $event.target.value)">
                    <div class="text-start ms-5 "><label style="color: whitesmoke;" for="characterExperience">Punkty doświadczenia</label></div>
                </div>
            </div>
        </div>

        <div class="row">        
            <div class="col-2 attblockgroup border rounded mb-3 ms-3">
                <div style="font-size: larger;" class="mt-4 me-2">Atrybuty</div>
                <div class="d-block attblock rounded mx-auto mt-4">
                    <label style="color: black;font-size: 15px;font-weight: 500;" for="characterStrength">Siła</label>
                    <input type="text" class="input me-4 att" id="characterStrength" autocomplete="off" placeholder="10" v-model="character.characterStrength"  @input="updateForm('characterStrength', $event.target.value); strUpdate()">
                    <div class="attbonus border border-2 rounded">
                        {{ Math.floor(this.character.characterStrength/2) - 5 }}
                    </div>
                </div>
                <div class="d-block attblock rounded mx-auto">
                    <label style="color: black;font-size: 15px;font-weight: 500;" for="characterDexterity">Zręczność</label>
                    <input type="text" class="input me-4 att" id="characterDexterity" autocomplete="off" placeholder="10" v-model="character.characterDexterity"  @input="updateForm('characterDexterity', $event.target.value); dexUpdate()">
                    <div class="attbonus border border-2 rounded">
                        {{ Math.floor(this.character.characterDexterity/2) - 5 }}
                    </div>
                </div>
                <div class="d-block attblock rounded mx-auto">
                    <label style="color: black;font-size: 15px;font-weight: 500;" for="characterConstitution">Wytrzymałość</label>
                    <input type="text" class="input me-4 att" id="characterConstitution" autocomplete="off" placeholder="10" v-model="character.characterConstitution"  @input="updateForm('characterConstitution', $event.target.value); conUpdate()">
                    <div class="attbonus border border-2 rounded">
                        {{ Math.floor(this.character.characterConstitution/2) - 5 }}
                    </div>
                </div>
                <div class="d-block attblock rounded mx-auto">
                    <label style="color: black;font-size: 15px;font-weight: 500;" for="characterInteligence">Inteligencja</label>
                    <input type="text" class="input me-4 att" id="characterInteligence" autocomplete="off" placeholder="10" v-model="character.characterInteligence"  @input="updateForm('characterInteligence', $event.target.value); intUpdate()">
                    <div class="attbonus border border-2 rounded">
                        {{ Math.floor(this.character.characterInteligence/2) - 5 }}
                    </div>
                </div>
                <div class="d-block attblock rounded mx-auto">
                    <label style="color: black;font-size: 15px;font-weight: 500;" for="characterWisdom">Mądrość</label>
                    <input type="text" class="input me-4 att" id="characterWisdom" autocomplete="off" placeholder="10" v-model="character.characterWisdom"  @input="updateForm('characterWisdom', $event.target.value); wisUpdate()">
                    <div class="attbonus border border-2 rounded">
                        {{ Math.floor(this.character.characterWisdom/2) - 5 }}
                    </div>
                </div>
                <div class="d-block attblock rounded mx-auto mb-3">
                    <label style="color: black;font-size: 15px;font-weight: 500;" for="characterCharisma">Charyzma</label>
                    <input type="text" class="input me-4 att" id="characterCharisma" autocomplete="off" placeholder="10" v-model="character.characterCharisma"  @input="updateForm('characterCharisma', $event.target.value); chaUpdate()">
                    <div class="attbonus border border-2 rounded">
                        {{ Math.floor(this.character.characterCharisma/2) - 5 }}
                    </div>
                </div>
                
            </div>
            <div class="col-2 mt-2 ms-4">
                <div class="d-block inspblock border rounded ms-4">
                    <input type="text" class="input insp border border-light rounded-circle" id="characterInspiration" autocomplete="off" placeholder="2" v-model="character.characterInspiration"  @input="updateForm('characterInspiration', $event.target.value)">
                    Inspiracje
                </div>
                <div class="d-block inspblock border rounded mt-4 ms-4">
                    <input type="text" class="input insp border border-light rounded-circle" id="characterProficencyBonus" autocomplete="off" placeholder="4" v-model="character.characterProficencyBonus"  @input="updateForm('characterProficencyBonus', $event.target.value)">
                    <span class="ms-3">Bonus do biegłości</span>
                </div>
                <div class="savingblock border rounded ms-2 mt-4">
                    <div class="d-block">
                        <span class="d-flex flex-row pt-3 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[0]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSavingThrowStrength" autocomplete="off" placeholder="0" v-model="character.characterSavingThrowStrength"  @input="updateForm('characterSavingThrowStrength', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSavingThrowStrength">Siła</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[1]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSavingThrowDexterity" autocomplete="off" placeholder="0" v-model="character.characterSavingThrowDexterity"  @input="updateForm('characterSavingThrowDexterity', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSavingThrowDexterity">Zręczność</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[2]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSavingThrowConstitution" autocomplete="off" placeholder="0" v-model="character.characterSavingThrowConstitution"  @input="updateForm('characterSavingThrowConstitution', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSavingThrowConstitution">Wytrzymałość</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[3]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSavingThrowInteligence" autocomplete="off" placeholder="0" v-model="character.characterSavingThrowInteligence"  @input="updateForm('characterSavingThrowInteligence', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSavingThrowInteligence">Inteligencja</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[4]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSavingThrowWisdom" autocomplete="off" placeholder="0" v-model="character.characterSavingThrowWisdom"  @input="updateForm('characterSavingThrowWisdom', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSavingThrowWisdom">Mądrość</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[5]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSavingThrowCharisma" autocomplete="off" placeholder="0" v-model="character.characterSavingThrowCharisma"  @input="updateForm('characterSavingThrowCharisma', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSavingThrowCharisma">Charyzma</label>
                     </span>
                     <div style="font-size: large;" class="mt-1 me-2">Rzuty obronne</div>
                    </div>
                </div>
                <div class="skillblock border rounded ms-2 mt-4">
                    <div class="d-block">
                        <span class="d-flex flex-row pt-3 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[6]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillAcrobatics" autocomplete="off" placeholder="0" v-model="character.characterSkillAcrobatics"  @input="updateForm('characterSkillAcrobatics', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillAcrobatics">Akrobatyka</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[7]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillAnimalHandling" autocomplete="off" placeholder="0" v-model="character.characterSkillAnimalHandling"  @input="updateForm('characterSkillAnimalHandling', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillAnimalHandling">Opieka zwierząt</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[8]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillArcana" autocomplete="off" placeholder="0" v-model="character.characterSkillArcana"  @input="updateForm('characterSkillArcana', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillArcana">Arkana</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[9]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillAthletics" autocomplete="off" placeholder="0" v-model="character.characterSkillAthletics"  @input="updateForm('characterSkillAthletics', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillAthletics">Atletyka</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[10]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillDeception" autocomplete="off" placeholder="0" v-model="character.characterSkillDeception"  @input="updateForm('characterSkillDeception', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillDeception">Oszustwo</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[11]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillHistory" autocomplete="off" placeholder="0" v-model="character.characterSkillHistory"  @input="updateForm('characterSkillHistory', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillHistory">Historia</label>
                     </span>
                     <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[12]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillInsight" autocomplete="off" placeholder="0" v-model="character.characterSkillInsight"  @input="updateForm('characterSkillInsight', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillInsight">wnikliwość</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[13]" id="flexCheckDefault"  @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillIntimidation" autocomplete="off" placeholder="0" v-model="character.characterSkillIntimidation"  @input="updateForm('characterSkillIntimidation', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillIntimidation">Zastraszanie</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[14]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillInvestigation" autocomplete="off" placeholder="0" v-model="character.characterSkillInvestigation"  @input="updateForm('characterSkillInvestigation', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillInvestigation">Śledztwo</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[15]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillMedicine" autocomplete="off" placeholder="0" v-model="character.characterSkillMedicine"  @input="updateForm('characterSkillMedicine', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillMedicine">Medycyna</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[16]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillNature" autocomplete="off" placeholder="0" v-model="character.characterSkillNature"  @input="updateForm('characterSkillNature', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillNature">Natura</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[17]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillPerception" autocomplete="off" placeholder="0" v-model="character.characterSkillPerception"  @input="updateForm('characterSkillPerception', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillPerception">Percepcja</label>
                     </span>
                     <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[18]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillPerformance" autocomplete="off" placeholder="0" v-model="character.characterSkillPerformance"  @input="updateForm('characterSkillPerformance', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillPerformance">Występy</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[19]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillPersuation" autocomplete="off" placeholder="0" v-model="character.characterSkillPersuation"  @input="updateForm('characterSkillPersuation', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillPersuation">Perswazja</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[20]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillReligion" autocomplete="off" placeholder="0" v-model="character.characterSkillReligion"  @input="updateForm('characterSkillReligion', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillReligion">Religia</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[21]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillSleightOfHand" autocomplete="off" placeholder="0" v-model="character.characterSkillSleightOfHand"  @input="updateForm('characterSkillSleightOfHand', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillSleightOfHand">Zwinne dłonie</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[22]" id="flexCheckDefault" @change="set_data()">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillStealth" autocomplete="off" placeholder="0" v-model="character.characterSkillStealth"  @input="updateForm('characterSkillStealth', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillStealth">Skradanie</label>
                        </span>
                        <span class="d-block"></span>
                        <span class="d-flex flex-row pt-2 ps-2">
                            <input class="form-check-input rounded-circle me-2 mt-2" type="checkbox" v-model="character.characterProficencyBools[23]" id="flexCheckDefault" @change="set_data(); addProfBonus(23)">
                            <input type="text" class="input me-2 saving d-inline" id="characterSkillSurvival" autocomplete="off" placeholder="0" v-model="character.characterSkillSurvival"  @input="updateForm('characterSkillSurvival', $event.target.value)">
                            <label class="d-inline mt-1" style="color: whitesmoke; font-size: 14px;" for="characterSkillSurvival">Przetrwanie</label>
                     </span>
                     <div style="font-size: large;" class="me-2 mt-1">Umiejętności</div>
                    </div>
                </div>
            </div>
            <div class="col-4"> 
                <div class="d-block ms-5">
                    <span class="d-flex flex-row">
                        <div class=" threeblock border border-2 border rounded mx-auto mb-3">
                            <input type="text" class="d-inline input me-4 three" id="characterArmorClass" autocomplete="off" placeholder="10" v-model="character.characterArmorClass"  @input="updateForm('characterArmorClass', $event.target.value)">
                            <div class="threetext text border border-2 rounded">
                                Klasa pancerza
                            </div>
                        </div>

                        <div class=" threeblock border border-2 border rounded mx-auto mb-3">
                            <input type="text" class="d-inline input me-4 three" id="characterInitiative" autocomplete="off" placeholder="0" v-model="character.characterInitiative"  @input="updateForm('characterInitiative', $event.target.value)">
                            <div class="threetext border border-2  rounded">
                                <div class="mt-2 text">inicjatywa</div>
                            </div>
                        </div>

                        <div class=" threeblock border border-2 border rounded mx-auto mb-3">
                            <input type="text" class="d-inline input me-4 three" id="characterSpeed" autocomplete="off" placeholder="30" v-model="character.characterSpeed"  @input="updateForm('characterSpeed', $event.target.value)">
                            <div class="threetext border border-2  rounded">
                                <div class="mt-2 text">Prędkość</div>
                            </div>
                        </div> 
                </span>
                </div>
                <div class="d-block ms-5 mt-3">
                    <div class="hitpointsblock border rounded-top mt-3">
                        <div style="font-size: 17px;" class="d-inline me-4">Maksymalne punkty życia:</div>
                        <input style="width: 60px; font-size: 20px;" type="text" class="d-inline input me-4 mt-2 saving" id="characterHealthMax" autocomplete="off" placeholder="0" v-model="character.characterHealthMax"  @input="updateForm('characterHealthMax', $event.target.value)">
                    
                        <input style="width: 120px; height: 60px; font-size: 45px;" type="text" class=" input me-3 mt-4 mb-4 hp" id="characterHealthCurrent" autocomplete="off" placeholder="0" v-model="character.characterHealthCurrent"  @input="updateForm('characterHealthCurrent', $event.target.value)">
                        <div style="font-size: 23px;" class="me-3 mb-3">Punkty życia</div>
                    </div>
                    <div class="hitpointsblock border rounded-bottom mt-3">
                        <input style="width: 120px; height: 60px; font-size: 45px;" type="text" class=" input me-3 mt-5 mb-4 hp" id="characterHealthTemp" autocomplete="off" placeholder="0" v-model="character.characterHealthTemp"  @input="updateForm('characterHealthTemp', $event.target.value)">
                        <div style="font-size: 23px;" class="me-3 mb-3">Tymczasowe punkty życia</div>
                    </div>
                </div>
                <div class="d-block ms-5 mt-2">
                    <span class="d-flex flex-row">
                        <div class="deathsaves border rounded mt-3 ms-2">
                            <div style="font-size: 17px;" class="d-inline me-4">Łącznie:</div>
                            <input style="width: 40px; font-size: 16px;" type="text" class="d-inline input me-3 mt-2 saving" id="characterHitDiceTotal" autocomplete="off" placeholder="2d10" v-model="character.characterHitDiceTotal"  @input="updateForm('characterHitDiceTotal', $event.target.value)">

                            <input style="width: 120px; height: 60px; font-size: 30px;" type="text" class=" input ms-2 mt-4 mb-1 hp" id="characterHitDice" autocomplete="off" placeholder="1d10" v-model="character.characterHitDice"  @input="updateForm('characterHitDice', $event.target.value)">
                            <div style="font-size: 17px;" class="">Kości życia</div>
                        </div>
                        <div class="deathsaves border rounded mt-3 ms-4">
                            <span class="d-flex flex-row mt-3">
                                <div style="margin-left: 40px;" class=" mt-4" >Udane:</div>
                                <input style="margin-top: 30px;" class="form-check-input rounded-circle ms-1" type="checkbox" v-model="isCheckedSave1" id="flexCheckDefault" @click="save1">
                                <input style="margin-top: 30px;" class="form-check-input rounded-circle ms-1" type="checkbox" v-model="isCheckedSave2" id="flexCheckDefault" @click="save2">
                                <input style="margin-top: 30px;" class="form-check-input rounded-circle ms-1" type="checkbox" v-model="isCheckedSave3" id="flexCheckDefault" @click="save3">
                            </span>
                            <span style="margin-bottom: 27px;" class="d-flex flex-row mt-1">
                                <div class="ms-3" >Nieudane:</div>
                                <input style="margin-top: 7px;" class="form-check-input rounded-circle ms-1 " type="checkbox" v-model="isCheckedDeath1" id="flexCheckDefault" @click="death1">
                                <input style="margin-top: 7px;" class="form-check-input rounded-circle ms-1 " type="checkbox" v-model="isCheckedDeath2" id="flexCheckDefault" @click="death2">
                                <input style="margin-top: 7px;" class="form-check-input rounded-circle ms-1 " type="checkbox" v-model="isCheckedDeath3" id="flexCheckDefault" @click="death3">
                            </span>
                            <div style="font-size: 17px; margin-bottom: 15px;" class="">Rzuty na śmierć</div>
                        </div>
                    </span>
                </div>
            </div>
            <div class="col-4">
                <div class="hitpointsblock border rounded-top">
                    <div style="font-size: 17px; margin-bottom: 15px;" class="">Osobowość</div>     
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="character.characterPersonalityTraits"  @input="updateForm('characterPersonalityTraits', $event.target.value)"></textarea>   
                </div>
                <div class="hitpointsblock border mt-3">
                    <div style="font-size: 17px; margin-bottom: 15px;" class="">Ideały</div>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="character.characterIdeals"  @input="updateForm('characterIdeals', $event.target.value)"></textarea>
                </div>
                <div class="hitpointsblock border mt-3">
                    <div style="font-size: 17px; margin-bottom: 15px;" class="">Więzi</div>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="character.characterBonds"  @input="updateForm('characterBonds', $event.target.value)"></textarea>
                </div>
                <div class="hitpointsblock border mt-3 rounded-bottom">
                    <div style="font-size: 17px; margin-bottom: 15px;" class="">Wady</div>  
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="character.characterFlaws"  @input="updateForm('characterFlaws', $event.target.value)"></textarea>   
                </div>
            </div>
        </div>
            <div class="d-flex mt-4 mb-4 me-5">
            <button class="submit ms-auto" type="submit" :disabled="submitStatus === 'PENDING'">Stwórz Kartę postaci</button>
          </div>
          <div class="row">
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'OK'">Karta postaci została utworzona, przenosimy cię na jej strone</p>
            <p style="color: red;" class="mt-2 d-flex justify-content-center" v-if="submitStatus === 'PENDING'">Wysyłanie...</p>
          </div>
        </form>
    </div>   
  </template>
  
  <script>
     import {mapGetters} from 'vuex'
  import axios from 'axios';
  import useVuelidate from "@vuelidate/core";
  import { required, helpers, integer } from "@vuelidate/validators";
  export default {
   name: "VuelidateDemo",
   data() {
     return {
       v$: useVuelidate(),
       submitStatus: null,
       id: null,
       isCheckedSave1: false,
       isCheckedSave2: false,
       isCheckedSave3: false,
       isCheckedDeath1: false,
       isCheckedDeath2: false,
       isCheckedDeath3: false,
       classitems: [],
       raceitems: [],
       Classn: null,
       Racen: null,
       character: {
        characterId: null,  
        characterName: null, 
        characterLevel: null,  
        characterExperience: null,  
        characterAlignment: null,  
        characterBackground: null,  
        characterStrength: null,  
        characterDexterity: null,  
        characterConstitution: null,  
        characterInteligence: null,  
        characterWisdom: null,  
        characterCharisma: null,  
        characterInspiration: null,  
        characterProficencyBonus: 0,  
        characterSavingThrowStrength: 0,  
        characterSavingThrowDexterity: 0,  
        characterSavingThrowConstitution: 0,  
        characterSavingThrowInteligence: 0,  
        characterSavingThrowWisdom: 0,  
        characterSavingThrowCharisma: 0, 
        characterSkillAcrobatics: 0,  
        characterSkillAnimalHandling: 0,  
        characterSkillArcana: 0,  
        characterSkillAthletics: 0, 
        characterSkillDeception: 0,  
        characterSkillHistory: 0,  
        characterSkillInsight: 0,  
        characterSkillIntimidation: 0,  
        characterSkillInvestigation: 0,  
        characterSkillMedicine: 0,  
        characterSkillNature: 0,  
        characterSkillPerception: 0,  
        characterSkillPerformance: 0,  
        characterSkillPersuation: 0,  
        characterSkillReligion: 0,  
        characterSkillSleightOfHand: 0,  
        characterSkillStealth: 0,  
        characterSkillSurvival: 0,  
        characterProficencyBools: [],
        characterSkills: "",  
        characterArmorClass: null,  
        characterInitiative: null, 
        characterSpeed: null,  
        characterHealthMax: null,  
        characterHealthCurrent: null,  
        characterHealthTemp: null,  
        characterHitDiceTotal: null,  
        characterHitDice: null,  
        characterDeathSuccess: null,  
        characterDeathFail: null,  
        characterPersonalityTraits: null,  
        characterIdeals: null,  
        characterBonds: null,  
        characterFlaws: null,  
        characterRaceId: null,  
        characterDndClassId: null,  
       },
       error : null,
     };
   },
   validations() {
     return {
     };
   },
   computed: {
          ...mapGetters(['user'])
      },
   methods: {
    addProfBonus(num) {
        switch (num) {
            case 0:
            this.character.characterSavingThrowStrength += parseInt(this.character.characterProficencyBonus);
            break;
            case "1":
            this.character.characterSavingThrowDexterity += this.character.characterProficencyBonus;
            break;
            case "2":
            this.character.characterSavingThrowConstitution += this.character.characterProficencyBonus;
            break;
            case "3":
            this.character.characterSavingThrowInteligence += this.character.characterProficencyBonus;
            break;
            case "4":
            this.character.characterSavingThrowWisdom += this.character.characterProficencyBonus;
            break;
            case "5":
            this.character.characterSavingThrowCharisma += this.character.characterProficencyBonus;
            break;
            case "6":
            this.character.characterSkillAcrobatics += this.character.characterProficencyBonus;
            break;
            case "7":
            this.character.characterSkillAnimalHandling += this.character.characterProficencyBonus;
            break;
            case "8":
            this.character.characterSkillArcana += this.character.characterProficencyBonus;
            break;
            case "9":
            this.character.characterSkillAthletics += this.character.characterProficencyBonus;
            break;
            case "10":
            this.character.characterSkillDeception += this.character.characterProficencyBonus;
            break;
            case "11":
            this.character.characterSkillHistory += this.character.characterProficencyBonus;
            break;
            case "12":
            this.character.characterSkillInsight += this.character.characterProficencyBonus;
            break;
            case "13":
            this.character.characterSkillIntimidation += this.character.characterProficencyBonus;
            break;
            case "14":
            this.character.characterSkillInvestigation += this.character.characterProficencyBonus;
            break;
            case "15":
            this.character.characterSkillMedicine += this.character.characterProficencyBonus;
            break;
            case "16":
            this.character.characterSkillNature += this.character.characterProficencyBonus;
            break;
            case "17":
            this.character.characterSkillPerception += this.character.characterProficencyBonus;
            break;
            case "18":
            this.character.characterSkillPerformance += this.character.characterProficencyBonus;
            break;
            case "19":
            this.character.characterSkillPersuation += this.character.characterProficencyBonus;
            break;
            case "20":
            this.character.characterSkillReligion += this.character.characterProficencyBonus;
            break;
            case 21:
            if(this.character.characterSkillSleightOfHand[21] == true) {
                    this.character.characterSkillSleightOfHand = parseInt(this.character.characterSkillSleightOfHand) + parseInt(this.character.characterSkillSleightOfHand);
                } else {
                    this.character.characterSkillSleightOfHand = parseInt(this.character.characterSkillSleightOfHand) - parseInt(this.character.characterSkillSleightOfHand);
                }
            
            this.updateForm ('characterSkillSleightOfHand', this.character.characterSkillSleightOfHand)
            break;
            case 22:
            if(this.character.characterSkillStealth[22] == true) {
                    this.character.characterSkillStealth = parseInt(this.character.characterSkillStealth) + parseInt(this.character.characterProficencyBonus);
                } else {
                    this.character.characterSkillStealth = parseInt(this.character.characterSkillStealth) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillStealth', this.character.characterSkillStealth)
            break;
            case 23:
                if(this.character.characterProficencyBools[23] == true) {
                    this.character.characterSkillSurvival = parseInt(this.character.characterSkillSurvival) + parseInt(this.character.characterProficencyBonus);
                } else {
                    this.character.characterSkillSurvival = parseInt(this.character.characterSkillSurvival) - parseInt(this.character.characterProficencyBonus);
                }
            
            this.updateForm ('characterSkillSurvival', this.character.characterSkillSurvival)
            break;

            
        }
    },
    save1() {
        
        this.isCheckedSave1 = !this.isCheckedSave1
        if(this.isCheckedSave1 == true) {
            this.character.characterDeathSuccess++
        } else {
            this.character.characterDeathSuccess--
        }
        this.set_data()
    },
    save2() {
        this.isCheckedSave2 = !this.isCheckedSave2
        if(this.isCheckedSave2 == true) {
            this.character.characterDeathSuccess++
        } else {
            this.character.characterDeathSuccess--
        }
        this.set_data()
    },
    save3() {
        this.isCheckedSave3 = !this.isCheckedSave3
        if(this.isCheckedSave3 == true) {
            this.character.characterDeathSuccess++
        } else {
            this.character.characterDeathSuccess--
        }
        this.set_data()
    },
    death1() {
        
        this.isCheckedDeath1 = !this.isCheckedDeath1
        if(this.isCheckedDeath1 == true) {
            this.character.characterDeathFail++
        } else {
            this.character.characterDeathFail--
        }
        this.set_data()
    },
    death2() {
        

        this.isCheckedDeath2 = !this.isCheckedDeath2
        if(this.isCheckedDeath2 == true) {
            this.character.characterDeathFail++
        } else {
            this.character.characterDeathFail--
        }
        this.set_data()
    },
    death3() {
        
        this.isCheckedDeath3 = !this.isCheckedDeath3
        if(this.isCheckedDeath3 == true) {
            this.character.characterDeathFail++
        } else {
            this.character.characterDeathFail--
        }
        this.set_data()
    },
    set_data() {
      localStorage.setItem( 'characterProficencyBools', JSON.stringify(this.character.characterProficencyBools));
      localStorage.setItem( 'Racen', JSON.stringify(this.Racen));
      localStorage.setItem( 'Classn', JSON.stringify(this.Classn));
      localStorage.setItem( 'Classn', JSON.stringify(this.Classn));
      localStorage.setItem( 'characterDeathSuccess', JSON.stringify(this.character.characterDeathSuccess));
      localStorage.setItem( 'characterDeathFail', JSON.stringify(this.character.characterDeathFail));
      localStorage.setItem( 'characterRaceId', JSON.stringify(this.character.characterRaceId));
      localStorage.setItem( 'characterDndClassId', JSON.stringify(this.character.characterDndClassId));
    },
    changeRaceName(item) {
        this.Racen = item.raceName
        this.character.characterRaceId = item.raceId
        this.set_data()
        console.log(this.character.characterRaceId)
    },
    changeClassName(item) {
        this.Classn = item.className
        this.character.characterDndClassId = item.classId
        this.set_data()
        console.log(this.character.characterDndClassId)
    },
    clearFields() {
      this.character = {
        characterName: "",
        characterSchool: "",
        characterCasting: "",
        characterRange: "",
        characterDuration: "",
        characterComponents: "",
        characterLevel: null,
        characterDesc: "",
        characterAHL: "",
        upvotes: 0
      }; 
     },
      openStorage () {
        return JSON.parse(localStorage.getItem('character'))
      },
      saveStorage (character) {
        localStorage.setItem('character', JSON.stringify(character))
      },
      updateForm (input, value) {
        this.character[input] = value
      
        let storedForm = this.openStorage() 
        if (!storedForm) storedForm = {} 
      
        storedForm[input] = value 
        this.saveStorage(storedForm) 
        console.log(this.character.characterProficencyBools)
      },
      async createPost() {
      const isFormCorrect = await this.v$.$validate()
      if (isFormCorrect) 
      {
          this.submitStatus = 'PENDING'
          
          axios.post('https://localhost:7095/api/Character', this.character, {
                              headers: {
                                  Authorization: 'Bearer ' + localStorage.getItem('token')
                              }
                              }).then( 
                      response => {
                              setTimeout(() => {
                                  this.submitStatus = 'OK'
                                  localStorage.removeItem('character');
                                  localStorage.removeItem( 'Racen');
                                  localStorage.removeItem( 'Classn');
                                  localStorage.removeItem( 'Classn');
                                  localStorage.removeItem( 'characterDeathSuccess');
                                  localStorage.removeItem( 'characterDeathFail');    
                              }, 500)
                              setTimeout(() => {
                                axios.get('https://localhost:7095/api/character')
                                .then(response => {
                                  this.characters = response.data
                                  this.id = this.characters[this.characters.length-1].characterId
                                  this.$router.push('/Czary/' + this.id)
                                })   
                              }, 2000)    
                      })  
      }
      else 
      {
          this.submitStatus = 'ERROR'
      }  
     },
     strUpdate() {
            this.character.characterSavingThrowStrength = Math.floor(this.character.characterStrength/2) - 5
            this.updateForm('characterSavingThrowStrength', Math.floor(this.character.characterStrength/2) - 5)
            this.character.characterSkillAthletics = Math.floor(this.character.characterStrength/2) - 5
            this.updateForm('characterSkillAthletics', Math.floor(this.character.characterStrength/2) - 5)
     },
     dexUpdate() {

            this.character.characterSavingThrowDexterity = Math.floor(this.character.characterDexterity/2) - 5
            this.updateForm('characterSavingThrowDexterity', Math.floor(this.character.characterDexterity/2) - 5)
            this.character.characterSkillAcrobatics = Math.floor(this.character.characterDexterity/2) - 5
            this.updateForm('characterSkillAcrobatics', Math.floor(this.character.characterDexterity/2) - 5)
            this.character.characterSkillSleightOfHand = Math.floor(this.character.characterDexterity/2) - 5
            this.updateForm('characterSkillSleightOfHand', Math.floor(this.character.characterDexterity/2) - 5)
            this.character.characterSkillStealth = Math.floor(this.character.characterDexterity/2) - 5
            this.updateForm('characterSkillStealth', Math.floor(this.character.characterDexterity/2) - 5)

     },
     conUpdate() {
         
            this.character.characterSavingThrowConstitution = Math.floor(this.character.characterConstitution/2) - 5
            this.updateForm('characterSavingThrowConstitution', Math.floor(this.character.characterConstitution/2) - 5)
        
     },  
     intUpdate() {

       
            this.character.characterSavingThrowInteligence = Math.floor(this.character.characterInteligence/2) - 5
            this.updateForm('characterSavingThrowInteligence', Math.floor(this.character.characterInteligence/2) - 5)
            this.character.characterSkillArcana = Math.floor(this.character.characterInteligence/2) - 5
            this.updateForm('characterSkillArcana', Math.floor(this.character.characterInteligence/2) - 5)
            this.character.characterSkillHistory = Math.floor(this.character.characterInteligence/2) - 5
            this.updateForm('characterSkillHistory', Math.floor(this.character.characterInteligence/2) - 5)
            this.character.characterSkillInvestigation = Math.floor(this.character.characterInteligence/2) - 5
            this.updateForm('characterSkillInvestigation', Math.floor(this.character.characterInteligence/2) - 5)
            this.character.characterSkillNature = Math.floor(this.character.characterInteligence/2) - 5
            this.updateForm('characterSkillNature', Math.floor(this.character.characterInteligence/2) - 5)
            this.character.characterSkillReligion = Math.floor(this.character.characterInteligence/2) - 5
            this.updateForm('characterSkillReligion', Math.floor(this.character.characterInteligence/2) - 5)
    
      },
      wisUpdate() {
         
      
            this.character.characterSavingThrowWisdom = Math.floor(this.character.characterWisdom/2) - 5
            this.updateForm('characterSavingThrowWisdom', Math.floor(this.character.characterWisdom/2) - 5)
            this.character.characterSkillAnimalHandling = Math.floor(this.character.characterWisdom/2) - 5
            this.updateForm('characterSkillAnimalHandling', Math.floor(this.character.characterWisdom/2) - 5)
            this.character.characterSkillMedicine = Math.floor(this.character.characterWisdom/2) - 5
            this.updateForm('characterSkillMedicine', Math.floor(this.character.characterWisdom/2) - 5)
            this.character.characterSkillInsight = Math.floor(this.character.characterWisdom/2) - 5
            this.updateForm('characterSkillInsight', Math.floor(this.character.characterWisdom/2) - 5)
            this.character.characterSkillPerception = Math.floor(this.character.characterWisdom/2) - 5
            this.updateForm('characterSkillPerception', Math.floor(this.character.characterWisdom/2) - 5)
            this.character.characterSkillSurvival = Math.floor(this.character.characterWisdom/2) - 5
            this.updateForm('characterSkillSurvival', Math.floor(this.character.characterWisdom/2) - 5)
        
      },
      chaUpdate() {
         
    
            this.character.characterSavingThrowCharisma = Math.floor(this.character.characterCharisma/2) - 5
            this.updateForm('characterSavingThrowCharisma', Math.floor(this.character.characterCharisma/2) - 5)
            this.character.characterSkillDeception = Math.floor(this.character.characterCharisma/2) - 5
            this.updateForm('characterSkillDeception', Math.floor(this.character.characterCharisma/2) - 5)
            this.character.characterSkillIntimidation = Math.floor(this.character.characterCharisma/2) - 5
            this.updateForm('characterSkillIntimidation', Math.floor(this.character.characterCharisma/2) - 5)
            this.character.characterSkillPerformance = Math.floor(this.character.characterCharisma/2) - 5
            this.updateForm('characterSkillPerformance', Math.floor(this.character.characterCharisma/2) - 5)
            this.character.characterSkillPersuation = Math.floor(this.character.characterCharisma/2) - 5
            this.updateForm('characterSkillPersuation', Math.floor(this.character.characterCharisma/2) - 5)

      },      
   },
   mounted() {
        axios.get('https://localhost:7095/api/DndClass')
            .then(response => this.classitems = response.data);

        axios.get('https://localhost:7095/api/Race')
            .then(response => this.raceitems = response.data);

        
            
    },
   created () {
        if(this.user == null) {
          localStorage.removeItem('character'); 
        }
      
       

        const savedBool = JSON.parse(localStorage.getItem('characterProficencyBools'))
        console.log(savedBool)
        if (savedBool) {
            this.character.characterProficencyBools = savedBool
        }
        const savedraceid = JSON.parse(localStorage.getItem('characterRaceId'))
        if (savedraceid) {
            this.character.characterRaceId = savedraceid
        }
        const savedclassid= JSON.parse(localStorage.getItem('characterDndClassId'))
        if (savedclassid) {
            this.character.characterDndClassId = savedclassid
        }
        const savedclass = JSON.parse(localStorage.getItem('Classn'))
        if (savedclass) {
            this.Classn = savedclass
        }
        const saveddeath = JSON.parse(localStorage.getItem('characterDeathFail'))
        if (saveddeath) {
            this.character.characterDeathFail = saveddeath
        }
        const savedsave = JSON.parse(localStorage.getItem('characterDeathSuccess'))
        if (savedsave) {
            this.character.characterDeathSuccess = savedsave
        }
        const savedrace = JSON.parse(localStorage.getItem('Racen'))
        if (savedrace) {
            this.Racen = savedrace
        }
          const storedForm = this.openStorage()
          if (storedForm) {
              this.character = {
                  ...this.character,
                  ...storedForm
              }
          }
          if(this.character.characterDeathSuccess == 1) {
            this.isCheckedSave1 = true
        } else if(this.character.characterDeathSuccess == 2) {
            this.isCheckedSave1 = true
            this.isCheckedSave2 = true
        } else if(this.character.characterDeathSuccess == 3) {
            this.isCheckedSave1 = true
            this.isCheckedSave2 = true
            this.isCheckedSave3 = true
        }

        if(this.character.characterDeathFail == 1) {
            this.isCheckedDeath1 = true
        } else if(this.character.characterDeathFail == 2) {
            this.isCheckedDeath1 = true
            this.isCheckedDeath2 = true
        } else if(this.character.characterDeathFail == 3) {
            this.isCheckedDeath1 = true
            this.isCheckedDeath2 = true
            this.isCheckedDeath3 = true
        }
        
        
      }
  };
  </script>
  
  <style scoped>
  .submit{
      width: 300px;
      border: none;
      outline: none;
      height: 45px;
      background: #ececec;
      border-radius: 5px;
      transition: .4s;
  }
  .submit:hover{
      background: #202528;
      color: #fff;
  }
    .form-control {
        background-color: #2e2e36;
        border: none;
        color: whitesmoke;
    }
  .deathsaves {
    width: 162px;
    height: 150px;
    background-color: #2e2e36;
  }
  .hp {
    height: 17px;
    width: 40px;
    border: none;
    background-color: #2e2e36;
    color: whitesmoke;
    font-size: 18px;
    text-align: center;
  }
  .hitpointsblock {
    width: 346px;
    height: 180px;
    background-color: #2e2e36;
    margin-left: 10px;
  }
 .threetext {
    line-height: 1;
    position: absolute;
    background-color: #2e2e36;
    height: 30px;
    width: 80px;
    left: 3px;
    top: 76px;
    color: #53535b;
    font-size: 13px;
    z-index: 5;
 }
 .three {
    width: 50px;
    height: 50px;
    font-size: 40px;
    color: rgb(26, 25, 25);
    text-align: center;
    margin-left: 20px;
    margin-top: 23px;
    border: none;
    background-color: #2e2e36;
    color: whitesmoke;
  }
  .threeblock {
    width: 90px;
    height: 90px;
    background-color: #2e2e36;
    position: relative;
  }
  .form-check-input {
    background-color: darkslategrey !important;
    height: 12px;
    width: 12px;
  }
  .form-check-input:checked {
    background-color: white !important;
    color: #2e2e36;
    border: none;
  }
  .savingblock {
    background-color: #2e2e36;
    height: 240px;
    width: 225px;
  }
  .skillblock {
    background-color: #2e2e36;
    height: 640px;
    width: 225px;
  }
  .saving {
    height: 17px;
    width: 40px;
    border: none;
    border-bottom: 1px solid white;
    background-color: #2e2e36;
    color: whitesmoke;
    font-size: 18px;
    text-align: center;
  }
  .saving:focus {
    box-shadow: 0 4px 2px -2px #666;
    outline-width: 0;
    }
  .inp {
    border: none;
    border-bottom: 1px solid white;
    background-color: #37373d;
    color: whitesmoke;
    font-size: 18px;
  }
  .inp:focus {
    box-shadow: 0 4px 2px -2px #666;
    outline-width: 0;
    }
  .insp {
    width: 45px;
    height: 45px;
    margin: 0 !important;
    padding: 0 !important;
    position: absolute;
    z-index: 2;
    left: -15px;
    top: -8px;
    text-align: center;
    font-size: 25px;
  }
  .inspblock {
    margin-left: 15px;
    background-color: #2e2e36;
    height: 30px;
    width: 200px;
    padding-top: 3px;
    position: relative;
    
  }
  .namelab {
    margin-left: 10px;
  }
  .chaname {
    margin-left: 25px;
    width: 265px;
    height: 37px;
    border: none;
    border-bottom: 1px solid white;
    background-color: #2e2e36;
    color: whitesmoke;
    font-size: 18px;
  }
  .chaname:focus {
    box-shadow: 0 4px 2px -2px #666;
    outline-width: 0;
    }
  .attblockgroup {
    background-color: #37373d;
    margin-left: 13px;
    height: 1020px;
    width: 180px;
  }
  .attblock {
    width: 110px;
    height: 110px;
    background-color: white;
    margin-top: 45px;
    position: relative;
  }
  .attbonus {
    position: absolute;
    background-color: white;
    height: 30px;
    width: 30px;
    left: 40px;
    top: 96px;
    color: #53535b;
  }
    .att {
        width: 75px;
        height: 75px;
        font-size: 60px;
        color: rgb(26, 25, 25);
        text-align: center;
        margin-left: 19px;
        border: none;
    }
    .wid {
        min-width: 1200px;
    }
   .namebox {
    background: #2e2e36;
    height: 100px;
    width: 320px;
   }
  
   .classbox {
    background: #37373d;
    height: 150px;
    width: 306px;
   }
   .text {
    color: whitesmoke;
   }
  </style>