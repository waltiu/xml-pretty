const hl7V3Xml =`<?xml version="1.0" encoding="UTF-8"?>
<ClinicalDocument xmlns="urn:hl7-org:v3" 
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xsi:schemaLocation="urn:hl7-org:v3 ../schema/POCD_MT000040.xsd">
  
  <!-- 文档元数据 -->
  <realmCode code="US"/>
  <typeId root="2.16.840.1.113883.1.3" extension="POCD_HD000040"/>
  <templateId root="2.16.840.1.113883.10.20.22.1.1"/> <!-- CDA文档模板ID -->
  
  <!-- 文档标识 -->
  <id root="2.16.840.1.113883.19.1122.4" extension="20230815001"/>
  <code code="18842-5" codeSystem="2.16.840.1.113883.6.1" 
        displayName="出院小结"/>
  <title>约翰·史密斯的出院摘要</title>
  
  <!-- 生效时间 -->
  <effectiveTime value="20230815103000"/>
  
  <!-- 保密级别 -->
  <confidentialityCode code="N" codeSystem="2.16.840.1.113883.5.25"/>
  
  <!-- 患者信息 -->
  <recordTarget>
    <patientRole>
      <id extension="12345" root="2.16.840.1.113883.19.5"/>
      <patient>
        <name>
          <given>John</given>
          <family>Smith</family>
        </name>
        <administrativeGenderCode code="M" 
                  codeSystem="2.16.840.1.113883.5.1"/>
        <birthTime value="19800101"/>
      </patient>
      <providerOrganization>
        <id root="2.16.840.1.113883.19.5"/>
        <name>General Hospital</name>
      </providerOrganization>
    </patientRole>
  </recordTarget>
  
  <!-- 文档作者（医生） -->
  <author>
    <time value="20230815100000"/>
    <assignedAuthor>
      <id root="2.16.840.1.113883.4.6" extension="MD123456"/>
      <assignedPerson>
        <name>
          <given>Sarah</given>
          <family>Johnson</family>
          <prefix>Dr.</prefix>
        </name>
      </assignedPerson>
    </assignedAuthor>
  </author>
  
  <!-- 保管机构 -->
  <custodian>
    <assignedCustodian>
      <representedCustodianOrganization>
        <id root="2.16.840.1.113883.19.5"/>
        <name>General Hospital</name>
      </representedCustodianOrganization>
    </assignedCustodian>
  </custodian>
  
  <!-- 文档主体 -->
  <component>
    <structuredBody>
      <!-- 诊断章节 -->
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.5"/> <!-- 诊断章节模板 -->
          <code code="29548-5" codeSystem="2.16.840.1.113883.6.1" 
                displayName="诊断"/>
          <title>主要诊断</title>
          <text>
            <list>
              <item>急性心肌梗死 (ICD-10: I21.9)</item>
            </list>
          </text>
          <entry>
            <act classCode="ACT" moodCode="EVN">
              <code code="282291009" 
                    codeSystem="2.16.840.1.113883.6.96" 
                    displayName="心肌梗死诊断"/>
              <effectiveTime>
                <low value="20230810"/>
                <high value="20230815"/>
              </effectiveTime>
            </act>
          </entry>
        </section>
      </component>
      
      <!-- 治疗章节 -->
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.45"/>
          <code code="11535-2" codeSystem="2.16.840.1.113883.6.1" 
                displayName="治疗计划"/>
          <title>出院治疗</title>
          <text>
            <list>
              <item>阿司匹林 100mg 每日一次</item>
              <item>氯吡格雷 75mg 每日一次</item>
            </list>
          </text>
          <entry>
            <substanceAdministration classCode="SBADM" moodCode="INT">
              <text>阿司匹林</text>
              <consumable>
                <manufacturedProduct>
                  <manufacturedMaterial>
                    <code code="1191" 
                          codeSystem="2.16.840.1.113883.6.88" 
                          displayName="阿司匹林"/>
                  </manufacturedMaterial>
                </manufacturedProduct>
              </consumable>
              <doseQuantity value="100" unit="mg"/>
            </substanceAdministration>
          </entry>
        </section>
      </component>
    </structuredBody>
  </component>
</ClinicalDocument>`
export default hl7V3Xml;