package KURSAVAYA.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KURSAVAYA.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ЗаправБак
 */
@Entity(name = "IISKURSAVAYAЗаправБак")
@Table(schema = "public", name = "ЗаправБак")
public class ZapravBak {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Объем")
    private Integer объем;

    @Column(name = "ТипТоплива")
    private String типтоплива;

    @Column(name = "УровеньЗаливки")
    private Integer уровеньзаливки;

    @Column(name = "Активен")
    private Boolean активен;

    @Column(name = "ЦенаТопл")
    private Float ценатопл;


    public ZapravBak() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getОбъем() {
      return объем;
    }

    public void setОбъем(Integer объем) {
      this.объем = объем;
    }

    public String getТипТоплива() {
      return типтоплива;
    }

    public void setТипТоплива(String типтоплива) {
      this.типтоплива = типтоплива;
    }

    public Integer getУровеньЗаливки() {
      return уровеньзаливки;
    }

    public void setУровеньЗаливки(Integer уровеньзаливки) {
      this.уровеньзаливки = уровеньзаливки;
    }

    public Boolean getАктивен() {
      return активен;
    }

    public void setАктивен(Boolean активен) {
      this.активен = активен;
    }

    public Float getЦенаТопл() {
      return ценатопл;
    }

    public void setЦенаТопл(Float ценатопл) {
      this.ценатопл = ценатопл;
    }


}