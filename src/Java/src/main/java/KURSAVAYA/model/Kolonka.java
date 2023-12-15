package KURSAVAYA.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KURSAVAYA.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Колонка
 */
@Entity(name = "IISKURSAVAYAКолонка")
@Table(schema = "public", name = "Колонка")
public class Kolonka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерКол")
    private Integer номеркол;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZapravBak")
    @Convert("ZapravBak")
    @Column(name = "ЗаправБак", length = 16, unique = true, nullable = false)
    private UUID _zapravbakid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZapravBak", insertable = false, updatable = false)
    private ZapravBak zapravbak;


    public Kolonka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерКол() {
      return номеркол;
    }

    public void setНомерКол(Integer номеркол) {
      this.номеркол = номеркол;
    }


}