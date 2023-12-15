package KURSAVAYA.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KURSAVAYA.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: БанкДанные
 */
@Entity(name = "IISKURSAVAYAБанкДанные")
@Table(schema = "public", name = "БанкДанные")
public class BankDannye {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерКарт")
    private Long номеркарт;

    @Column(name = "CVV")
    private Integer cvv;

    @Column(name = "ДатаОконч")
    private Date датаоконч;


    public BankDannye() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Long getНомерКарт() {
      return номеркарт;
    }

    public void setНомерКарт(Long номеркарт) {
      this.номеркарт = номеркарт;
    }

    public Integer getCVV() {
      return cvv;
    }

    public void setCVV(Integer cvv) {
      this.cvv = cvv;
    }

    public Date getДатаОконч() {
      return датаоконч;
    }

    public void setДатаОконч(Date датаоконч) {
      this.датаоконч = датаоконч;
    }


}