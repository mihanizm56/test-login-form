type Supplier struct {
 FullName         string      // Полное наименование юр. лица
 LegalFormID      int64         // Форма организации
 General          string        // ФИО Руководителя/ФИО самозанятого
 PassportDocID    uuid.UUID     // Фото с паспортом
 CountryID        uuid.UUID     //Страна
 OGRN                 string    //ОГРН
 INN                  string    //ИНН
 KPP                  string    //КПП
 BIC                  string    //БИК
 OKPO                 string    //ОКПО
 OKOPF                string    //ОКОПФ
 OGRNIP               string   //ОГРНИП
}